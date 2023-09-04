import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SearchMusics from "../components/musics/SearchMusics";
import Aside from "../components/ui/Aside";
import AudioPlayer from "../components/ui/AudioPlayer";
import Footer from "../components/footer/Footer";

const RootLayoutPage = () => (
  <div className="App">
    <Header />
    <SearchMusics />
    {/* Grid layout */}
    <section className="lg:grid lg:grid-cols-12 lg:gap-4 px-6 mb-32">
      <Aside />
      <section className="col-span-9 lg:p-0">
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </section>
    <AudioPlayer />
  </div>
);

export default RootLayoutPage;
