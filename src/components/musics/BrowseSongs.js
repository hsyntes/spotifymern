import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BrowseSongs = () => {
  const navigate = useNavigate();

  return (
    <Card className="bg-white dark:bg-dark rounded-md !p-6">
      <Card.Header>
        <h6 className="font-bold text-xl lg:text-base lg:font-medium">
          Listen songs your favorites
        </h6>
      </Card.Header>
      <Card.Body className="mb-4">
        <p className="text-gray-500 text-base lg:text-sm">
          We'll keep you updated on new episodes
        </p>
      </Card.Body>
      <Card.Footer>
        <Button
          type="button"
          variant="light"
          onClick={() => navigate("/musics")}
          className="w-full py-3 lg:py-2 lg:w-auto"
        >
          <span className="me-3">Browse songs</span>
          <FontAwesomeIcon icon={faMusic} />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BrowseSongs;
