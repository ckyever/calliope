import App from "./App";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
    errorElement: <ErrorPage />,
  },
];

export default routes;
