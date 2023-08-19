import { useNavigate } from "react-router-dom";
import Brand from "../ui/Brand";
import Button from "../ui/Button";
import { useSelector } from "react-redux";

const Header = () => {
  const userState = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const { currentUser } = userState;

  return (
    <header className="flex items-center sticky p-4 lg:px-6 top-0 bg-light dark:bg-black z-10 my-2 lg:my-6">
      <Brand />
      {!currentUser && (
        <Button
          type="button"
          variant="primary"
          className="ms-auto"
          onClick={() => navigate("/auth?mode=signup")}
        >
          Sign Up
        </Button>
      )}
    </header>
  );
};

export default Header;
