import App from "./App";
import Home from "./components/Home";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/muses", element: <Users /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
