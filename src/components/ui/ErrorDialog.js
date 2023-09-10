import Button from "./Button";
import Modal from "./Modal";

const ErrorDialog = ({ show, message, handleError }) => (
  <Modal show={show} handleModal={handleError} className="w-5/6 lg:w-1/4">
    <Modal.Header>
      <h6 className="font-bold mx-auto text-lg">Error</h6>
    </Modal.Header>
    <Modal.Body>
      <p className="text-gray-600 dark:text-gray-400 text-center">{message}</p>
    </Modal.Body>
    <Modal.Footer className="flex items-center justify-center">
      <Button
        type="button"
        variant="link"
        className="text-primary text-lg"
        onClick={handleError}
      >
        Got it
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ErrorDialog;
