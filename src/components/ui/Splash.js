import { createPortal } from "react-dom";
import logo from "../../logo.svg";

const Splash = () =>
  createPortal(
    <div id="splash-backdrop" className="bg-white dark:bg-black">
      <img src={logo} alt="Logo" className="relative" loading="lazy" />
    </div>,
    document.getElementById("modal-root")
  );

export default Splash;
