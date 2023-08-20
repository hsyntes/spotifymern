import {
  faBookBookmark,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import CreatePlaylist from "../playlist/CreatePlaylist";
import BrowseSongs from "../musics/BrowseSongs";
import { useState } from "react";
import CreatePlaylistModal from "../playlist/CreatePlaylistModal";

const Panel = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

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
            className={
              modal
                ? "flex items-center"
                : "flex items-center text-gray-500 hover:text-dark dark:hover:text-white transition"
            }
            onClick={handleModal}
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
        </div>
      </ul>
      <CreatePlaylist />
      <BrowseSongs />
      <CreatePlaylistModal modal={modal} handleModal={handleModal} />
    </>
  );
};

export default Panel;
