import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { faPlayCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../ui/Modal";
import { useQuery } from "react-query";

const CreatePlaylist = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

  const {} = useQuery({
    queryKey: "getM",
  });

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
      <Modal show={modal} className="w-3/4 lg:w-1/4">
        <Modal.Header>
          <FontAwesomeIcon
            icon={faTimes}
            size="xl"
            className="cursor-pointer ms-auto"
            onClick={handleModal}
          />
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePlaylist;
