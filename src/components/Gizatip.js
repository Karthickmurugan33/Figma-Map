import React from 'react'
import style from "../styles/Gizatip.module.css";
import { BiBuildings } from "react-icons/bi"
const Gizatip = () => {
    return (
        <div>
            <div className="">
                <div className={style.gitip}>
                    <div className={style.gisquare}>
                        <BiBuildings />
                    </div>
                    <div>
                        <p className={style.gicity}>Giza</p>
                        <p className={style.gipopulation}>10,547,980</p>
                    </div>
                </div>
                <div className={style.giarrow}></div>


            </div>

        </div>
    )
}

export default Gizatip