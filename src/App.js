import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { themeSliceActions } from "./store/theme/theme-slice";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    patH: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { theme } = themeState;

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      dispatch(themeSliceActions.switchTheme(e.matches ? "dark" : "light"))
    );

  useEffect(() => {
    const [html, body] = [
      document.querySelector("html"),
      document.querySelector("body"),
    ];

    if (theme === "dark") html.className = "dark";
    else html.className = "";

    body.className = "bg-light text-dark dark:bg-black dark:text-white";
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
