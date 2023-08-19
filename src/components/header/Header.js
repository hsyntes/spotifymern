import { useNavigate } from "react-router-dom";
import Brand from "../ui/Brand";
import Button from "../ui/Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center sticky p-4 lg:px-6 top-0 bg-light dark:bg-black z-10 my-2 lg:my-6">
      <Brand />
      <Button
        type="button"
        variant="primary"
        className="ms-auto"
        onClick={() => navigate("/auth?mode=signup")}
      >
        Sign Up
      </Button>
    </header>
  );
};

export default Header;
