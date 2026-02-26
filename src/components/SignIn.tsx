import { useEffect, useRef, useState } from "react";

import ENVIRONMENT_VARIABLES from "../environmentVariables";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  const [openModal, setOpenModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (openModal) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [openModal]);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>SIGN IN</button>
      <dialog
        ref={dialogRef}
        className={styles["sign-in-dialog"]}
        onClose={() => setOpenModal(false)}
      >
        <div className={styles["sign-in-container"]}>
          <button onClick={() => setOpenModal(false)}>X</button>
          <a href={ENVIRONMENT_VARIABLES.AUTH_URL}>Continue with Spotify</a>
        </div>
      </dialog>
    </>
  );
}

export default SignIn;
