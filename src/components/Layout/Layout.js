import { Outlet } from "react-router-dom";
import Panel from "../ui/Panel";
import Button from "../ui/Button";
import Brand from "../ui/Brand";
import { useSelector } from "react-redux";

const Layout = () => {
  const musicState = useSelector((state) => state.music);
  const { music } = musicState;

  return (
    <div className="App lg:grid lg:grid-cols-12">
      <aside className="hidden lg:block col-span-3 p-2">
        <Panel />
      </aside>
      <section className="col-span-9 p-2">
        <header className="flex items-center sticky top-0 py-2 dark:bg-black z-10 mb-4 m-2">
          <Brand />
          <Button type="button" variant="primary" className="ms-auto">
            Sign Up
          </Button>
        </header>
        <main>
          <Outlet />
          <audio
            controls
            src={music}
            autoPlay
            className="w-full sticky bottom-2"
          />
        </main>
      </section>
      <footer></footer>
    </div>
  );
};

export default Layout;
