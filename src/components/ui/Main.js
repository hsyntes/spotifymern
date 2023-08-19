import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Main = () => (
  <div className="lg:grid lg:grid-cols-12 lg:gap-4 px-6 mb-24">
    <Aside />
    <section className="col-span-9 lg:p-0">
      <main>
        <Outlet />
      </main>
    </section>
  </div>
);

export default Main;
