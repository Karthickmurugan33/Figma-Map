import React from 'react'
import style from "../styles/Berlin.module.css";
import { TbBuildingCommunity } from "react-icons/tb"
const Berlin = () => {
    return (

        <div>
            <div className="">
                <div className={style.bertip}>
                    <div className={style.bersquare}>
                        <TbBuildingCommunity />
                    </div>
                    <div>
                        <p className={style.bercity}>Berlin</p>
                        <p className={style.berpopulation}>76,541,106</p>
                    </div>
                </div>
                <div className={style.berarrow}></div>


            </div>
        </div>

    )
}

export default Berlin