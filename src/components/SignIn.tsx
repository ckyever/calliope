import { useState } from "react";

import ENVIRONMENT_VARIABLES from "../environmentVariables";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>SIGN IN</button>
      <dialog open={openModal} className={styles["sign-in-dialog"]}>
        <button onClick={() => setOpenModal(false)}>X</button>
        <a href={ENVIRONMENT_VARIABLES.AUTH_URL}>Continue with Spotify</a>
      </dialog>
    </>
  );
}

export default SignIn;
