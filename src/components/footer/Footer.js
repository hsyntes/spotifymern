import Card from "../ui/Card";

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
          <p className="text-justify">
            Full Stack MERN Developer with expertise in building robust and
            scalable web applications. Proficient in using React & Next.js to
            create interactive user interfaces and skilled in handling
            server-side development using Node.js, Express.js with MVC
            architecture, handling database operations including data models and
            advanced schema design using MongoDB, implementing AWS Cloud
            Computing & services.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Footer;
