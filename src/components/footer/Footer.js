import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Card from "../ui/Card";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Card className="!rounded-none !shadow-none lg:!rounded-md lg:!shadow !bg-light lg:!bg-white dark:!bg-black dark:lg:!bg-dark !p-0 lg:!p-6 mb-10">
      <Card.Header>
        <h1 className="font-semibold text-2xl mb-6">Developer Contact</h1>
      </Card.Header>
      <Card.Body className="flex items-start">
        <img
          src="https://avatars.githubusercontent.com/u/69708483?v=4"
          className="rounded-full"
          width={72}
          alt="Category"
          loading="lazy"
        />
        <div className="ms-4 w-full">
          <h1 className="font-bold text-2xl">Huseyin Ates</h1>
          <p className="mb-2">Full Stack Developer | MERN</p>
          <p className="text-justify mb-6">
            Full Stack MERN Developer with proficient in using React & Next.js
            to create interactive user interfaces and skilled in handling
            server-side development using Node.js, Express.js with MVC
            architecture, handling database operations including data models and
            advanced schema design using MongoDB, implementing Amazon Web
            Services & Cloud Computing.
          </p>
          <h4 className="font-bold text-lg mb-2">Contact me</h4>
          <section>
            <Button
              type="button"
              variant="dark"
              className="!bg-dark lg:dark:!bg-black m-1"
            >
              <FontAwesomeIcon icon={faGithub} />
              <a
                href="https://github.com/hsyntes"
                target="_blank"
                rel="noreferrer"
                className="ms-2"
              >
                GitHub
              </a>
            </Button>
            <Button type="button" variant="blue" className="m-1">
              <FontAwesomeIcon icon={faLinkedin} />
              <a
                href="https://linkedin.com/in/hsyntes"
                target="_blank"
                rel="noreferrer"
                className="ms-2"
              >
                LinkedIn
              </a>
            </Button>
            <Button type="button" variant="pink" className="m-1">
              <FontAwesomeIcon icon={faInstagram} />
              <a
                href="https://instagram.com/hsyntes"
                target="_blank"
                rel="noreferrer"
                className="ms-2"
              >
                Instagram
              </a>
            </Button>
          </section>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Footer;
