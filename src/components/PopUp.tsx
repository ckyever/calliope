import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import CloseButton from "./CloseButton";

import styles from "../styles/PopUp.module.css";

interface PopUpProps {
  buttonTitle: string;
  children: ReactNode;
}

function PopUp({ buttonTitle, children }: PopUpProps) {
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
      <button
        className={styles["popup-button"]}
        onClick={() => setOpenModal(true)}
      >
        {buttonTitle}
      </button>
      <dialog
        ref={dialogRef}
        className={styles["popup-dialog"]}
        onClose={() => setOpenModal(false)}
      >
        <div className={styles["popup-container"]}>
          <div className={styles["close-button"]}>
            <CloseButton
              onClick={() => setOpenModal(false)}
              hexColour="#778899"
            />
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}

export default PopUp;
