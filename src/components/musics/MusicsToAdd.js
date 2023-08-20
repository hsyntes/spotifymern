import { useDispatch, useSelector } from "react-redux";
import { musicSliceActions } from "../../store/music/music-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MusicsToAdd = ({ musics }) => {
  const musicState = useSelector((state) => state.music);
  const dispatch = useDispatch();

  return (
    <ul>
      {musics?.map((music) => (
        <li
          className="flex items-center mb-1 last:mb-0 cursor-pointer p-3 rounded hover:bg-light hover:dark:bg-darker"
          key={music._id}
          onClick={() =>
            dispatch(
              musicSliceActions.setSelectedMusic({
                id: music._id,
                source: music.source,
              })
            )
          }
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
              loading="lazy"
            />
          </div>
          <div className="ms-6">
            <h1
              className={
                musicState.music.source === music.source
                  ? "font-semibold text-primary"
                  : "font-semibold"
              }
            >
              {music.name}
            </h1>
            <p
              className={
                musicState.music.source === music.source
                  ? "text-primary-dark opacity-75"
                  : "text-gray-500"
              }
            >
              {music.singer}
            </p>
          </div>
          <div className="ms-auto">
            <button
              className="flex items-center justify-center bg-primary rounded-full"
              style={{
                width: "32px",
                height: "32px",
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="text-dark" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MusicsToAdd;
