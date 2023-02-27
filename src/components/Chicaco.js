import React from 'react'
import style from "../styles/Chicago.module.css";
import { HiOutlineBuildingLibrary } from "react-icons/hi2"
const Chicaco = () => {
    return (
        <div>
            <div className="">
                <div className={style.chitip}>
                    <div className={style.chisquare}>
                        <HiOutlineBuildingLibrary />
                    </div>
                    <div>
                        <p className={style.chicity}>Chicaco</p>
                        <p className={style.chipopulation}>98,320,300</p>
                    </div>
                </div>
                <div className={style.chiarrow}></div>


            </div>

        </div>
    )
}

export default Chicaco