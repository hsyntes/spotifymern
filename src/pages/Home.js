import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/ui/Card";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import getMusics from "../utils/getMusics";
import { useDispatch } from "react-redux";
import { musicSliceActions } from "../store/music/music-slice";
import Splash from "../components/ui/Splash";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();

  const { data: musics, isLoading: isMusicsLoading } = useQuery({
    queryKey: "getMusics",
    queryFn: getMusics,
  });

  if (isMusicsLoading) return <Splash />;

  return (
    <>
      <Card className="rounded-md shadow bg-white dark:bg-dark m-2 p-6 mb-4">
        <Card.Header className="flex items-center mb-8">
          <h1 className="font-semibold text-xl">SpotifyMERN musics</h1>
          <Link
            to="/"
            className="font-semibold text-primary hover:text-primary-dark ms-auto transition"
          >
            See all
          </Link>
        </Card.Header>
        <Card.Body className="grid grid-cols-12 gap-3">
          {musics?.map((music) => (
            <Card
              id="song-card"
              className="col-span-6 lg:col-span-3 xl:col-span-2 !bg-darker hover:!bg-black group relative rounded-md cursor-pointer !px-4 !py-8"
              key={music._id}
              onClick={() =>
                dispatch(musicSliceActions.setSelectedMusic(music.source))
              }
            >
              <Card.Header
                className="w-full overflow-hidden mb-8"
                style={{ height: "168px" }}
              >
                <img
                  src={music.thumbnail}
                  className="w-full h-full rounded-md object-cover"
                  loading="lazy"
                  alt="Song Thumbnail"
                />
              </Card.Header>
              <Card.Body className="mb-8">
                <h6 className="font-semibold">{music.name}</h6>
              </Card.Body>
              <Card.Footer>
                <p className="text-gray-500">{music.singer}</p>
              </Card.Footer>
              <div
                className="opacity-0 group-hover:opacity-100 flex items-center bg-primary rounded-full absolute justify-center bottom-2 group-hover:bottom-4 right-2 transition-all"
                style={{ width: "42px", height: "42px" }}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-dark"
                  size="lg"
                />
              </div>
            </Card>
          ))}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </>
  );
};

export default HomePage;