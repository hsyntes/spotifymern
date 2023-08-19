import Header from "../header/Header";
import Main from "../main/Main";
import AudioPlayer from "../ui/AudioPlayer";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <AudioPlayer />
    </div>
  );
};

export default Layout;
