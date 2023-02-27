import React from 'react'
import style from "../styles/Manaus.module.css";
import { RiBuilding2Line } from "react-icons/ri"
const Manaus = () => {

    return (
        <div>
            <div className="">
                <div className={style.mantip}>
                    <div className={style.mansquare}>
                        <RiBuilding2Line />
                    </div>
                    <div>
                        <p className={style.mancity}>Manaus</p>
                        <p className={style.manpopulation}>12,320,300</p>
                    </div>
                </div>
                <div className={style.manarrow}></div>


            </div>
        </div>
    )
}

export default Manaus