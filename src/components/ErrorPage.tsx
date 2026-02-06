import Header from "./Header";

import styles from "../styles/ErrorPage.module.css";

function ErrorPage() {
  return (
    <div>
      <Header />
      <div className={styles["error-message"]}>
        <h2>This page doesn't exist</h2>
      </div>
    </div>
  );
}

export default ErrorPage;
