import React from "react";
import style from "../styles/Tooltip.module.css";
import { TbBuilding } from "react-icons/tb";

const Tooltip = () => {
  return (
    <div className="">
      <div className={style.tip}>
        <div className={style.square}>
          <TbBuilding />
        </div>
        <div>
          <p className={style.city}>Queensland</p>
          <p className={style.population}>6,097,321</p>
        </div>
      </div>
      <div className={style.arrow}></div>
    </div>
  );
};

export default Tooltip;
