import {
  faBookBookmark,
  faHome,
  faMusic,
  faPlayCircle,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import CreatePlaylist from "../playlist/CreatePlaylist";
import BrowseSongs from "../musics/BrowseSongs";

const Panel = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul className="rounded-md shadow bg-white dark:bg-dark mb-4 p-6">
        <li className="mb-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center"
                : "flex items-center text-gray-500 hover:text-dark dark:hover:text-white transition"
            }
          >
            <FontAwesomeIcon icon={faHome} size="lg" />
            <span className="font-semibold dark:font-extrabold ms-4">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "flex items-center"
                : "flex items-center text-gray-500 hover:text-dark dark:hover:text-white transition"
            }
          >
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <span className="font-semibold dark:font-extrabold ms-4">
              Search
            </span>
          </NavLink>
        </li>
      </ul>
      <ul className="rounded-md shadow bg-white dark:bg-dark mb-4 p-6">
        <div className="flex items-center">
          <h6>
            <FontAwesomeIcon icon={faBookBookmark} size="lg" />
            <span className="font-bold text-lg text-gray-500  ms-4">
              Your Library
            </span>
          </h6>
          <Button
            variant="link"
            className="text-gray-500 hover:text-dark dark:hover:text-white ms-auto"
          >
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </Button>
        </div>
      </ul>
      <CreatePlaylist />
      <BrowseSongs />
    </>
  );
};

export default Panel;
