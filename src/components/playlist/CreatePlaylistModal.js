import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useInput from "../../hooks/useInput";
import searchMusics from "../../utils/searchMusics";
import { useQuery } from "react-query";
import getRecommendedMusics from "../../utils/getRecommendedMusics";
import MusicsToAdd from "../musics/MusicsToAdd";
import Spinner from "../ui/Spinner";

const CreatePlaylistModal = ({ modal, handleModal }) => {
  const {
    state: { value: search, isValid: isSearchValid },
    handleOnChange: handleSearchOnChange,
  } = useInput();

  const { data: searchedMusics, isLoading: isSearchMusicsLoading } = useQuery(
    ["searchMusics", search],
    {
      queryFn: () => {
        if (isSearchValid) return searchMusics(search);
      },
    }
  );

  const { data: recommendedMusics, isLoading: isRecommendedMusicsLoading } =
    useQuery({
      queryKey: "getRecommendedMusics",
      queryFn: getRecommendedMusics,
    });

  return (
    <Modal
      show={modal}
      className="w-11/12 lg:w-2/4 py-8 max-h-screen my-8 overflow-scroll"
    >
      <Modal.Header>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={handleSearchOnChange}
          placeholder="Search"
          className="!bg-white dark:!bg-dark"
        />
        <FontAwesomeIcon
          icon={faTimes}
          size="xl"
          className="cursor-pointer ms-auto"
          onClick={handleModal}
        />
      </Modal.Header>
      <Modal.Body className="">
        <h6 className="font-semibold text-lg mb-4">
          {searchedMusics ? (
            <span>Search results</span>
          ) : (
            <span>Suggestions</span>
          )}
        </h6>
        {search ? (
          isSearchMusicsLoading ? (
            <center>
              <Spinner />
            </center>
          ) : (
            <MusicsToAdd musics={searchedMusics} />
          )
        ) : (
          <MusicsToAdd musics={recommendedMusics} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CreatePlaylistModal;
