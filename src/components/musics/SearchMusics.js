import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreatePlaylistModal from "../playlist/CreatePlaylistModal";

const SearchMusics = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") setModal(false);
  });

  return (
    <>
      <center className="lg:hidden relative mb-6" onClick={handleModal}>
        <input
          type="text"
          placeholder="Search"
          className="form-input bg-light dark:bg-black focus:ring-0 caret-light dark:caret-black focus:border-gray-500 rounded border-gray-500 w-96"
        />
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-500"
        />
      </center>
      <CreatePlaylistModal modal={modal} handleModal={handleModal} />
    </>
  );
};

export default SearchMusics;
