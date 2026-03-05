import ENVIRONMENT_VARIABLES from "../environmentVariables";
import PopUp from "./PopUp";
import styles from "../styles/AuthPopUp.module.css";

function SignIn() {
  return (
    <PopUp buttonTitle="SIGN IN">
      <div className={styles["container"]}>
        <h2 className={styles.title}>Calliope</h2>
        <form className={styles["auth-form"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
        </form>
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
      </div>
    </PopUp>
  );
}

export default SignIn;
