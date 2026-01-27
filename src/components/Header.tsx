import { Link } from "react-router";

import styles from "../styles/Header.module.css";

import logo from "../assets/logo.png";

function Header() {
  const AUTH_URL = import.meta.env.VITE_AUTH_URL;

  if (!AUTH_URL) {
    throw Error("Missing environment variable - auth URL");
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} alt="Calliope logo"></img>
            <h1 className={styles["header-text"]}>Calliope</h1>
          </div>
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles["nav-links"]}>
            <li>
              <a href={AUTH_URL}>SIGN IN</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
