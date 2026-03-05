import PopUp from "./PopUp";
import styles from "../styles/AuthPopUp.module.css";

function CreateAccount() {
  return (
    <PopUp buttonTitle="CREATE ACCOUNT">
      <div className={styles["create-account"]}>
        <form className={styles["auth-form"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password"></input>
        </form>
        <button type="submit" className={styles["auth-button"]}>
          SIGN UP
        </button>
      </div>
    </PopUp>
  );
}

export default CreateAccount;
