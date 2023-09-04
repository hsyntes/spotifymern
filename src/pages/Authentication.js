import { useActionData, useNavigate, useSearchParams } from "react-router-dom";
import Container from "../components/ui/Container";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import ErrorDialog from "../components/ui/ErrorDialog";

const AuthenticationPage = () => {
  // Get query params
  const [searchParams] = useSearchParams();
  const actionData = useActionData();
  const queryClient = useQueryClient();
  const [errorDialog, setErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // Get the mode based on the query param
  const authMode = searchParams.get("mode");

  const handleError = () => setErrorDialog(false);

  useEffect(() => {
    if (actionData?.status === "fail") {
      setErrorDialog(true);
      setErrorMessage(actionData.message);
    }

    if (actionData?.status === "success") {
      queryClient.refetchQueries("getCurrentUser");

      navigate("/");
    }
  }, [actionData, queryClient, navigate]);

  return (
    <>
      <Container className="h-screen flex items-center justify-center my-8">
        {authMode === "signup" ? <Signup /> : <Login />}
      </Container>
      <ErrorDialog
        show={errorDialog}
        message={errorMessage}
        handleError={handleError}
      />
    </>
  );
};

// React-Router action
export const action = async ({ request }) => {
  // Get authentiocation mode based on the search query
  const searchParams = new URL(request.url).searchParams;

  // Get the current mode
  const authMode = searchParams.get("mode");
  const formData = await request.formData();

  // login based on the query
  if (authMode === "login") {
    const response = await fetch(
      "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      }
    );

    const data = await response.json();

    localStorage.setItem("jsonwebtoken", data.token);

    return data;
  }

  // signup based on the query
  if (authMode === "signup") {
    const response = await fetch(
      "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          username: formData.get("username"),
          email: formData.get("email"),
          password: formData.get("password"),
          passwordConfirm: formData.get("password-confirm"),
        }),
      }
    );

    const data = await response.json();

    localStorage.setItem("jsonwebtoken", data.token);

    return data;
  }
};

export default AuthenticationPage;
