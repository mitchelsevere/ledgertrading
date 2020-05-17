import React from 'react';
import { logo } from './logo';
import styles from './Header.module.css';
function Header(props) {
  return (
    <nav className={`${props.header} ${styles.header}`}>
      <img className={styles.logo} src={logo} alt="LedgerX Logo" />
      <a className={styles.login} href="#">
        Log in
      </a>
    </nav>
  );
}

export default Header;
