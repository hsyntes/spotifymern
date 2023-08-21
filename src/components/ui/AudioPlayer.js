import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import getMusic from "../../utils/getMusic";
import Playing from "../musics/Playing";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  const { data: currentMusic } = useQuery(["getMusic", music.id], {
    queryFn: () => getMusic(music.id),
  });

  const [isPlaying, setIsPlaying] = useState(currentMusic ? true : false);
  const audioRef = useRef(new Audio(currentMusic));

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (currentMusic) setIsPlaying(true);
  }, [currentMusic]);

  return (
    <div className="w-full flex items-center justify-center fixed bottom-0 rounded p-4">
      <audio
        ref={audioRef}
        src={music.source}
        // controls
        autoPlay={isPlaying}
      />
      {currentMusic && (
        <div
          className="w-96 lg:w-2/4 xl:w-1/4 rounded shadow-lg dark:border-2 dark:border-gray-700 flex items-center bg-white dark:bg-black cursor-pointer mx-auto p-4"
          onClick={handlePlay}
        >
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
          {/* <Playing className="ms-auto" /> */}
          {isPlaying ? (
            <Playing className="ms-auto" />
          ) : (
            <div className="ms-auto">
              <button
                className="flex items-center justify-center bg-primary rounded-full"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              >
                <FontAwesomeIcon icon={faPlay} className="text-dark" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
