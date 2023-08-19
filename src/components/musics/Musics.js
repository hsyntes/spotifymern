import { Link } from "react-router-dom";
import Card from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { musicSliceActions } from "../../store/music/music-slice";

const Musics = ({ musics }) => {
  const dispatch = useDispatch();

  return (
    <Card className="!rounded-none !shadow-none lg:!rounded-md lg:!shadow !bg-light lg:!bg-white dark:!bg-black dark:lg:!bg-dark !p-0 lg:!p-6 mb-8">
      <Card.Header className="flex items-center mb-8">
        <h1 className="font-semibold text-2xl">SpotifyMERN musics</h1>
        <Link
          to="/musics"
          className="font-semibold text-primary hover:text-primary-dark ms-auto transition"
        >
          See all
        </Link>
      </Card.Header>
      <Card.Body className="grid grid-cols-12 gap-3">
        {musics?.map((music) => (
          <Card
            id="song-card"
            className="col-span-6 lg:col-span-3 !bg-light hover:!bg-white dark:!bg-darker hover:dark:!bg-black group relative rounded-md cursor-pointer !px-4 !py-8"
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
                alt="Song Thumbnail"
                loading="lazy"
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
              <FontAwesomeIcon icon={faPlay} className="text-dark" size="lg" />
            </div>
          </Card>
        ))}
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
};

export default Musics;
