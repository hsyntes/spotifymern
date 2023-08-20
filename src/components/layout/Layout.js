import Header from "../header/Header";
import Main from "../main/Main";
import SearchMusics from "../musics/SearchMusics";
import AudioPlayer from "../ui/AudioPlayer";
const Layout = () => {
  return (
    <div className="App">
      <Header />
      <SearchMusics />
      <Main />
      <AudioPlayer />
    </div>
  );
};

export default Layout;
