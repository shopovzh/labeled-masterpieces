import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/catalog" className={styles.navLink}>
          Catalog
        </Link>

        {/* <div id="user">
          <Link to="/game-create">Custom Order</Link>
          <Link to="/logout">Logout</Link>
        </div> */}

        <Link to="/login" className={styles.navLink}>
          Login
        </Link>
        <Link to="/register" className={styles.navLink}>
          Register
        </Link>
      </nav>
    </header>
  );
}
