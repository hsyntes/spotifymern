import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import getMusicByCategory from "../utils/getMusicsByCategory";
import Spinner from "../components/ui/Spinner";
import Card from "../components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.svg";
import Playlist from "../components/playlist/Playlist";

const CategoriesPage = () => {
  const params = useParams();

  const { category } = params;

  const { data: musics, isLoading: isMusicsLoading } = useQuery(
    ["getMusicByCategory", category],
    {
      queryFn: () => getMusicByCategory(category),
      refetchOnWindowFocus: false,
    }
  );

  console.log(musics);

  if (isMusicsLoading)
    return (
      <center>
        <Spinner />
      </center>
    );

  return (
    <>
      <Card className="!rounded-none !shadow-none lg:!rounded-md lg:!shadow !bg-light lg:!bg-white dark:!bg-black dark:lg:!bg-dark !p-0 lg:!p-6 mb-8">
        <Card.Header>
          <div className="flex items-center mb-8">
            <Link
              to=".."
              className="flex items-center justify-center rounded-full bg-white lg:bg-light dark:bg-dark lg:dark:bg-black"
              style={{
                width: "42px",
                height: "42px",
              }}
            >
              <FontAwesomeIcon icon={faAngleLeft} size="xl" />
            </Link>
            <h4 className="font-bold text-2xl ms-4">
              {`${category.slice(0, 1).toUpperCase()}${category
                .slice(1)
                .toLowerCase()}`}
            </h4>
          </div>
          <section className="lg:flex lg:items-end">
            <div
              style={{
                width: "256px",
                height: "256px",
              }}
            >
              <img
                src={`https://spotifymern.s3.us-east-2.amazonaws.com/thumbnails/categories/${category}.jpg`}
                className="w-full h-full object-cover rounded"
                alt="Category"
              />
            </div>
            <div className="mt-8 lg:ms-8 lg:mt-0 mb-4">
              <span>Playlist</span>
              <h1 className="font-bold text-7xl lg:text-8xl mb-3">
                {category.toUpperCase()}
              </h1>
              <p className="text-gray-500 mb-2">
                {musics
                  ?.map((music) => music.singer)
                  .slice(0, 2)
                  .join(", ")}
                &nbsp; and more
              </p>
              <div className="flex items-center">
                <img src={logo} width={24} alt="Logo" />
                <span className="ms-1">SpotifyMERN</span>
                <span className="ms-1">• {musics.length} songs</span>
              </div>
            </div>
          </section>
        </Card.Header>
      </Card>
      <Playlist musics={musics} />
    </>
  );
};

export default CategoriesPage;
