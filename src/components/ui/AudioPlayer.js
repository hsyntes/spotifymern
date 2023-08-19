import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  return (
    <div className="w-full flex flex-col items-center justify-center fixed bottom-0 bg-white dark:bg-black py-4">
      <audio
        src={music}
        controls
        autoPlay
        className="w-96 lg:w-2/3 accent-primary"
      />
    </div>
  );
};

export default AudioPlayer;
