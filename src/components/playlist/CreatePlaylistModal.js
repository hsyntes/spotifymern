import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useInput from "../../hooks/useInput";
import searchMusics from "../../utils/searchMusics";
import { useQuery } from "react-query";
import getRecommendedMusics from "../../utils/getRecommendedMusics";

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
    <Modal show={modal} className="w-5/6 lg:w-2/4 py-8">
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
      <Modal.Body>
        <h6 className="font-semibold">Suggestions</h6>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePlaylistModal;
