import { Outlet } from "react-router-dom";
import Aside from "../ui/Aside";
import Footer from "../footer/Footer";

const Main = () => (
  <section className="lg:grid lg:grid-cols-12 lg:gap-4 px-6 mb-32">
    <Aside />
    <section className="col-span-9 lg:p-0">
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  </section>
);

export default Main;
