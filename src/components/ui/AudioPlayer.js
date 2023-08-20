import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import getMusic from "../../utils/getMusic";
import Playing from "../musics/Playing";

const AudioPlayer = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  const { data: currentMusic } = useQuery(["getMusic", music.id], {
    queryFn: () => getMusic(music.id),
  });

  console.log(currentMusic);

  return (
    <div className="w-full flex items-center justify-center fixed bottom-0 rounded p-4">
      <audio
        src={music.source}
        // controls
        autoPlay
      />
      {currentMusic && (
        <div className="w-96 lg:w-2/4 xl:w-1/4 rounded shadow-lg dark:border-2 dark:border-gray-700 flex items-center bg-white dark:bg-black mx-auto p-4">
          <div
            style={{
              width: "48px",
              height: "48px",
            }}
          >
            <img
              src={currentMusic.thumbnail}
              className="w-full h-full rounded-full object-cover"
              alt="Category"
              loading="lazy"
            />
          </div>
          <div className="ms-4">
            <h1 className="font-semibold">{currentMusic.name}</h1>
            <p className="opacity-75">{currentMusic.singer}</p>
          </div>
          <Playing className="ms-auto" />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
