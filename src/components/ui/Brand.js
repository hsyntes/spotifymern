import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Brand = () => (
  <Link to="/" className="flex items-center">
    <img src={logo} width={42} alt="App Logo" loading="lazy" />
    <h1 className="font-bold text-3xl ms-2">SpotifyMERN</h1>
  </Link>
);

export default Brand;
