import React from "react";
 import {TfiCrown} from "react-icons/tfi"
 import {BsGraphUp} from "react-icons/bs"
 import {GoGraph} from "react-icons/go"
import styles from "../styles/Detail.module.css";

const UserDetail = () => {
  return (
    <div>
      <div className={styles.allUser}>
        <h6 className={styles.all}>All User</h6>
        <p className={styles.allDetail}> DETAIL</p>
      </div>
      <div className={styles.detail}>
        <h1 className={styles.number}>2,431,340</h1>
      </div>
      <div className={styles.earning}>
        <div className={styles.ear}>

            <BsGraphUp/>
        </div>
        <div className={styles.tep}>
          <p className={styles.te}>Total Earning</p>
          <h6 className={styles.num}>540,549</h6>
        </div>

        <div className={styles.sales}>
          <TfiCrown  />
        </div>
        <div className={styles.sal}>
          <p className={styles.sa}>Sales</p>
          <h6 className={styles.salesnum}>1,205,677</h6>
        </div>

        <div className={styles.pur}>
            <GoGraph/>
        </div>
        <div className={styles.purchase}>
          <p className={styles.p}>Purchase</p>
          <h6 className={styles.pnum}>48,430,039</h6>
        </div>
      </div>
      <div className={styles.circle}>
        <div className={styles.cir}>
          <p className={styles.cirp}>27%</p>
        </div>
        <div className={styles.activeUser}>
          <p className={styles.pNumber}>92,980</p>
          <p className={styles.pActiceUser}>Active Users</p>
        </div>
      </div>
      <div className={styles.circletwo}>
        <div className={styles.cirtwo } >
          <p className={styles.cirptwo}>67%</p>
        </div>
        <div className={styles.activeUsertwo}>
          <p className={styles.pNumbertwo}>22,652</p>
          <p className={styles.pActiceUsertwo}>New Users</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
