import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router";

import ENVIRONMENT_VARIABLES from "./environmentVariables";
import * as LOCAL_STORAGE_KEYS from "./localStorageKeys.ts";

import type { AppContext } from "./types/outletContext.ts";
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN),
  );
  const [displayName, setDisplayName] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEYS.DISPLAY_NAME),
  );
  const [currentUserId, setCurrentUserId] = useState<number | null>(
    Number(localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ID)),
  );

  const [searchParams] = useSearchParams();
  const callbackToken = searchParams.get(LOCAL_STORAGE_KEYS.TOKEN);

  useEffect(() => {
    if (!callbackToken) return;

    const saveToken = async () => {
      setToken(callbackToken);
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, callbackToken);
    };
    saveToken();

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${ENVIRONMENT_VARIABLES.BACKEND_API_URL}/users/me`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${callbackToken}`,
            },
          },
        );
        const data = await response.json();
        setCurrentUserId(data.user.id);
        setDisplayName(data.user.displayName);
        localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, data.user.id);
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.DISPLAY_NAME,
          data.user.displayName,
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [callbackToken]);

  const signOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.DISPLAY_NAME);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ID);
    setToken("");
    setDisplayName("");
    setCurrentUserId(null);
  };

  return (
    <>
      <Header displayName={displayName} signOut={signOut} />
      <Outlet context={{ token, displayName, currentUserId } as AppContext} />
    </>
  );
}

export default App;
