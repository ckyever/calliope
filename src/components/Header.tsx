import { Link } from "react-router";

import ENVIRONMENT_VARIABLES from "../environmentVariables";

import styles from "../styles/Header.module.css";

import logo from "../assets/logo.png";

function Header() {
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
              <a href={ENVIRONMENT_VARIABLES.AUTH_URL}>SIGN IN</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
