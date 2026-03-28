import App from "./App";
import Home from "./components/Home";
import UserList from "./components/UserList";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/musers", element: <UserList /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
