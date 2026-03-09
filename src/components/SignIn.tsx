import { useState } from "react";

import ENVIRONMENT_VARIABLES from "../environmentVariables";
import PopUp from "./PopUp";
import styles from "../styles/AuthPopUp.module.css";

interface SignIn {
  isCreateAccount: boolean;
}

function SignIn({ isCreateAccount }: SignIn) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await fetch(
      `${ENVIRONMENT_VARIABLES.BACKEND_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      },
    );

    const data = await result.json();
    if (result.ok) {
      console.log("CKYTODO: Close the dialog");
    } else {
      setErrorMessages(["Unable to create an account", data.message]);
    }
  };

  return (
    <PopUp buttonTitle="SIGN IN">
      <div className={styles["container"]}>
        <h2 className={styles.title}>Calliope</h2>
        <form
          className={styles["auth-form"]}
          onSubmit={(event) => handleSignUp(event)}
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <ul>
            {errorMessages &&
              errorMessages.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
          <div className={styles["button-container"]}>
            <button type="submit" className={styles["auth-button"]}>
              Sign In
            </button>
            <a
              className={styles["auth-button"]}
              href={ENVIRONMENT_VARIABLES.AUTH_URL}
            >
              Continue with Spotify
            </a>
          </div>
        </form>
      </div>
    </PopUp>
  );
}

export default SignIn;
