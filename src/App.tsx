import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import ENVIRONMENT_VARIABLES from "./environmentVariables";
import Header from "./components/Header";
import styles from "./styles/App.module.css";

function App() {
  const [displayName, setDisplayName] = useState("");

  const [searchParams] = useSearchParams();
  const callbackToken = searchParams.get("token");

  useEffect(() => {
    if (!callbackToken) return;
    localStorage.setItem("token", callbackToken);

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${ENVIRONMENT_VARIABLES.BACKEND_API_URL}/user`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${callbackToken}`,
            },
          },
        );
        const data = await response.json();
        setDisplayName(data.user.displayName);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [callbackToken]);

  return (
    <>
      <Header displayName={displayName} />
      <div className={styles["main-content"]}>Welcome {displayName}</div>
    </>
  );
}

export default App;
