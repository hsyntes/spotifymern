import { useDispatch } from "react-redux";
import Card from "../ui/Card";
import { musicSliceActions } from "../../store/music/music-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Playlist = ({ musics }) => {
  const dispatch = useDispatch();

  return (
    <Card className="!rounded-none !shadow-none lg:!rounded-md lg:!shadow !bg-light lg:!bg-white dark:!bg-black dark:lg:!bg-dark !p-0 lg:!p-6 mb-8">
      <ul>
        {musics?.map((music) => (
          <li
            className="flex items-center mb-4 last:mb-0 cursor-pointer py-3 lg:px-3 rounded hover:bg-light hover:dark:bg-darker"
            onClick={() =>
              dispatch(musicSliceActions.setSelectedMusic(music.source))
            }
            key={music._id}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
              }}
            >
              <img
                src={music.thumbnail}
                className="w-full h-full rounded-full object-cover"
                alt="Category"
              />
            </div>
            <div className="ms-6">
              <h1 className="font-semibold">{music.name}</h1>
              <p className="text-gray-500">{music.singer}</p>
            </div>
            <div className="ms-auto">
              <button
                className="flex items-center justify-center bg-primary rounded-full"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Playlist;
