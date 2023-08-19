import { Outlet } from "react-router-dom";
import Panel from "../ui/Panel";
import Button from "../ui/Button";
import Brand from "../ui/Brand";
import { useSelector } from "react-redux";

const Layout = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  const audio = new Audio(music);

  audio.addEventListener("canplaythrough", () => {
    console.log(audio);
    console.log(audio.duration);
  });

  return (
    <div className="App">
      <header className="flex items-center sticky p-4 lg:px-6 top-0 bg-light dark:bg-black z-10 my-6">
        <Brand />
        <Button type="button" variant="primary" className="ms-auto">
          Sign Up
        </Button>
      </header>
      <div className="lg:grid lg:grid-cols-12 lg:gap-4 px-6">
        <aside className="hidden lg:block col-span-3">
          <Panel />
        </aside>
        <section className="col-span-9 lg:p-0">
          <main>
            <Outlet />
            <audio
              // controls
              src={music}
              autoPlay
              className="w-full sticky bottom-2"
            />
            {/* <div className="w-screen">
            <input type="range" className="absolute w-full left-0 bottom-2" />
          </div> */}
          </main>
        </section>
      </div>
      <footer></footer>
    </div>
  );
};

export default Layout;
