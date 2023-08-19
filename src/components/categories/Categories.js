import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <Card className="!rounded-none !shadow-none lg:!rounded-md lg:!shadow !bg-light lg:!bg-white dark:!bg-black dark:lg:!bg-dark !p-0 lg:!p-6 mb-8">
      <Card.Header className="mb-8">
        <h1 className="font-semibold text-xl">Categories</h1>
      </Card.Header>
      <Card.Body className="grid grid-cols-12 gap-3">
        {categories?.map((category) => (
          <Card
            className="col-span-6 lg:col-span-3 !bg-light hover:!bg-white dark:!bg-darker hover:dark:!bg-black group relative rounded-md group cursor-pointer !p-0"
            key={category._id}
            onClick={() => navigate(`/category/${category._id}`)}
          >
            <Card.Header
              className="w-full overflow-hidden"
              style={{ height: "256px" }}
            >
              <img
                src={`https://spotifymern.s3.us-east-2.amazonaws.com/thumbnails/categories/${category._id}.jpg`}
                className="w-full h-full rounded-md object-cover opacity-50 lg:opacity-100 group-hover:opacity-50 transition"
                alt="Song Thumbnail"
                loading="lazy"
              />
              <span className="lg:hidden peer group-hover:flex items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none cursor-pointer">
                <span className="text-4xl me-3">
                  {category._id.toUpperCase()}
                </span>
              </span>
            </Card.Header>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Categories;
