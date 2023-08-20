import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { faPlayCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Playlist from "./Playlist";
import { useQuery } from "react-query";
import getRecommendedMusics from "../../utils/getRecommendedMusics";
import useInput from "../../hooks/useInput";
import searchMusics from "../../utils/searchMusics";

const CreatePlaylist = () => {
  const [modal, setModal] = useState(false);

  const {
    state: { value: search, isValid: isSearchValid },
    handleOnChange: handleSearchOnChange,
  } = useInput();

  const { data: recommendedMusics, isLoading: isRecommendedMusicsLoading } =
    useQuery({
      queryKey: "getRecommendedMusics",
      queryFn: getRecommendedMusics,
    });

  const { data: searchedMusics, isLoading: isSearchMusicsLoading } = useQuery(
    ["searchMusics", search],
    {
      queryFn: () => {
        if (isSearchValid) return searchMusics(search);
      },
    }
  );

  const handleModal = () => setModal(!modal);

  console.log(searchedMusics);

  return (
    <>
      <Card className="bg-white dark:bg-dark rounded-md mb-4 !p-6">
        <Card.Header>
          <h6 className="font-bold text-xl lg:text-base lg:font-medium">
            Create your first playlist
          </h6>
        </Card.Header>
        <Card.Body className="mb-4">
          <p className="text-gray-500 text-base lg:text-sm">
            It's easy, we'' help you
          </p>
        </Card.Body>
        <Card.Footer>
          <Button
            type="button"
            variant="light"
            className="w-full py-3 lg:py-2 lg:w-auto"
            onClick={handleModal}
          >
            <span className="me-3">Create playlist</span>
            <FontAwesomeIcon icon={faPlayCircle} />
          </Button>
        </Card.Footer>
      </Card>
      <Modal show={modal} className="w-5/6 lg:w-2/4 py-8">
        <Modal.Header>
          <Input
            type="text"
            name="search"
            value={search}
            onChange={handleSearchOnChange}
            placeholder="Search musics"
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
    </>
  );
};

export default CreatePlaylist;
