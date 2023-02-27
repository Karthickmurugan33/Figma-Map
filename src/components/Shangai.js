import React from 'react'
import style from "../styles/Shan.module.css";
import { TbBuildingPavilon } from "react-icons/tb";
const Shangai = () => {
    return (
        <div>
            <div className="">
                <div className={style.shantip}>
                    <div className={style.shansquare}>
                        <TbBuildingPavilon />
                    </div>
                    <div>
                        <p className={style.shancity}>Shangai</p>
                        <p className={style.shanpopulation}>239,570,110</p>
                    </div>
                </div>
                <div className={style.shanarrow}></div>


            </div>
        </div>
    )
}

export default Shangai