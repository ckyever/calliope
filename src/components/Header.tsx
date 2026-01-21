import styles from "../styles/Header.module.css";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Calliope logo"></img>
          <h1 className={styles["header-text"]}>Calliope</h1>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles["nav-links"]}>
            <li>SIGN IN</li>
            <li>CREATE ACCOUNT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
