import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) audioRef.current.play();
    else audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  const handleRangeChange = (e) => {
    const { value } = e.target;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });

      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });

      return () => {
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("timeupdate", () => {});
        audioRef.current.removeEventListener("ended", () => {});
      };
    }
  }, [audioRef]);

  return (
    <div className="w-full flex flex-col items-center justify-center fixed bottom-0 bg-white dark:bg-black py-4">
      <audio autoPlay src={music} ref={audioRef} />
      {/* <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
      <Button
        type="button"
        variant="light"
        className="rounded-full !p-2 !px-3 mb-4"
        onClick={handlePlay}
        disabled={!music && true}
      >
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </Button>
      <input
        type="range"
        value={currentTime}
        max={duration}
        className="w-96 lg:w-1/3 h-1 accent-primary"
        onChange={handleRangeChange}
        disabled={!isPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
