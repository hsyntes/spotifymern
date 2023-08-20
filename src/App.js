import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { themeSliceActions } from "./store/theme/theme-slice";
import { useEffect } from "react";
import MusicsPage from "./pages/Musics";
import AuthenticationPage from "./pages/Authentication";
import getCurrentUser from "./utils/getCurrentUser";
import { useQuery } from "react-query";
import { currentUserSliceActions } from "./store/user/user-slice";
import Splash from "./components/ui/Splash";
import CategoryPage from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:category", element: <CategoryPage /> },
      { path: "musics", element: <MusicsPage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthenticationPage />,
    action: ({ request }) =>
      import("./pages/Authentication").then((module) =>
        module.action({ request })
      ),
  },
]);

function App() {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // * Fetching current user
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: "getCurrentUser",
    queryFn: getCurrentUser,
  });

  const { theme } = themeState;

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      dispatch(themeSliceActions.switchTheme(e.matches ? "dark" : "light"))
    );

  // * Setting current user to redux
  useEffect(() => {
    if (user) dispatch(currentUserSliceActions.setCurrentUser(user));
    else dispatch(currentUserSliceActions.setCurrentUser(null));
  }, [user, dispatch]);

  useEffect(() => {
    const [html, body] = [
      document.querySelector("html"),
      document.querySelector("body"),
    ];

    if (theme === "dark") html.className = "dark";
    else html.className = "";

    body.className = "bg-light text-dark dark:bg-black dark:text-white";
  }, [theme]);

  if (isUserLoading) return <Splash />;

  return <RouterProvider router={router} />;
}

export default App;
