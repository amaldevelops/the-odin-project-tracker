import App from "../App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import DefaultProfile from "./DefaultProfile";
import AboutReactRouter from "./AboutReactRouter";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },

  {
    path: "AboutReactRouter/:reactrouterinfo",
    element: <AboutReactRouter />,
  },
];

export default routes;
