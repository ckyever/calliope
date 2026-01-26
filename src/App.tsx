import { useSearchParams } from "react-router";

import Header from "./components/Header";

function App() {
  const [searchParams] = useSearchParams();
  const callbackToken = searchParams.get("token");

  if (callbackToken) {
    localStorage.setItem("token", callbackToken);
  }

  return (
    <>
      <Header />
      <div>Home page</div>
    </>
  );
}

export default App;
