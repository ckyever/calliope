import { Link } from "react-router";

import AuthPopUp from "./AuthPopUp";
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
            {displayName && (
              <li>
                <Link className={styles["nav-link-item"]} to="/">
                  {displayName}
                </Link>
              </li>
            )}
            <li className={styles["nav-link-item"]}>
              {displayName ? (
                <span className={styles["sign-out"]} onClick={signOut}>
                  SIGN OUT
                </span>
              ) : (
                <AuthPopUp isCreateAccount={false} />
              )}
            </li>
            {!displayName && (
              <li className={styles["nav-link-item"]}>
                <AuthPopUp isCreateAccount={true} />
              </li>
            )}
            <li className={styles["nav-link-item"]}>
              <Link className={styles["nav-link-item"]} to="musers">
                MUSERS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
