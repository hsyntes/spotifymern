import { useEffect } from "react";
import Button from "../components/ui/Button";
import logo from "../logo.svg";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
      <img src={logo} width={192} alt="App" className="mb-2 lg:mb-0" />
      <hr className="text-primary rotate-90 w-64 hidden lg:block" />
      <div className="text-center">
        <h1 className="font-bold text-6xl mb-2">OPPS!</h1>
        <p className="font-base text-3xl">Something went wrong 😢</p>
        <p className="font-base text-xl mb-4">
          Sorry, we couldn't find this page.
        </p>
        <Button type="button" variant="primary" className="!text-lg">
          Go home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
