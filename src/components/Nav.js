import React from "react";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.log}
          src="https://static.vecteezy.com/system/resources/thumbnails/004/891/075/small/the-initials-w-logo-is-simple-and-modern8868-free-vector.jpg"
          alt=""
        ></img>
        <p className={styles.name}>WASSERSTOFF</p>
      </div>

      <form>
        <input className={styles.input} type="search"></input>
      </form>
      <div className={styles.para}>
        <p className={styles.menu}>Static</p>
        <Link to={"/page3"} target="_blank">
          {" "}
          <p className={styles.menu}>Overview</p>
        </Link>
        <p className={styles.menu}>Dashboard</p>
        <p className={styles.menu}>Analytics</p>
      </div>
      <div className={styles.profile}>
        <img
          className={styles.icon}
          src="https://th.bing.com/th/id/OIP.8pQGc1uvCGFkeniunEv1rwHaHa?pid=ImgDet&rs=1"
        ></img>
        <img
          className={styles.slider}
          src="https://th.bing.com/th/id/OIP.xUq_pCHusU-H8ZS6lU-lNgAAAA?pid=ImgDet&rs=1"
        ></img>
      </div>
    </div>
  );
};

export default Nav;
