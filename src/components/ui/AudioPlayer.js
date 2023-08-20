import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  return (
    <div className="w-full flex flex-col items-center justify-center fixed bottom-0 bg-white dark:bg-black mx-auto p-4">
      <audio
        src={music.source}
        controls
        autoPlay
        className="w-full lg:w-3/4 caret-primary"
      />
    </div>
  );
};

export default AudioPlayer;
