import { Link } from "react-router";

import ENVIRONMENT_VARIABLES from "../environmentVariables";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

interface HeaderProps {
  displayName: string | null;
  signOut: () => void;
}

function Header({ displayName, signOut }: HeaderProps) {
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
            {displayName ? (
              <li>
                <a href="/">{displayName}</a>
              </li>
            ) : undefined}
            <li>
              <Link to="musers">MUSERS</Link>
            </li>
            <li>
              {displayName ? (
                <span className={styles["sign-out"]} onClick={signOut}>
                  SIGN OUT
                </span>
              ) : (
                <a href={ENVIRONMENT_VARIABLES.AUTH_URL}>SIGN IN</a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
