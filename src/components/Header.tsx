import styles from "../styles/Header.module.css";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Calliope logo"></img>
        <h1 className={styles["header-text"]}>Calliope</h1>
      </div>
    </header>
  );
}

export default Header;
