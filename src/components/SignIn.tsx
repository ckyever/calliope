import ENVIRONMENT_VARIABLES from "../environmentVariables";
import PopUp from "./PopUp";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  return (
    <PopUp buttonTitle="SIGN IN">
      <a
        className={styles["auth-button"]}
        href={ENVIRONMENT_VARIABLES.AUTH_URL}
      >
        Continue with Spotify
      </a>
    </PopUp>
  );
}

export default SignIn;
