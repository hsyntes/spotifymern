import Brand from "../ui/Brand";
import Button from "../ui/Button";

const Header = () => (
  <header className="flex items-center sticky p-4 lg:px-6 top-0 bg-light dark:bg-black z-10 my-6">
    <Brand />
    <Button type="button" variant="primary" className="ms-auto">
      Sign Up
    </Button>
  </header>
);

export default Header;
