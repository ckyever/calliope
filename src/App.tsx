import { useSearchParams } from "react-router";

import Header from "./components/Header";

import styles from "./styles/App.module.css";

function App() {
  const [searchParams] = useSearchParams();
  const callbackToken = searchParams.get("token");

  if (callbackToken) {
    localStorage.setItem("token", callbackToken);
  }

  return (
    <>
      <Header />
      <div className={styles["main-content"]}>Dashboard</div>
    </>
  );
}

export default App;
