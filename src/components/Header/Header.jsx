import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.scss";

const Header = ({ detailId }) => {
  return (
    <header>
      <Link to={detailId ? `/${detailId}` : "/"}>
        <div className={styles.linkContainer}>
          <i
            className={`fa fa-angle-double-left ${styles.icon}`}
            style={{ fontSize: "3em" }}
          />
          back
        </div>
      </Link>
    </header>
  );
};

export default Header;
