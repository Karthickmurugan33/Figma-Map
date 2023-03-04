import React from "react";
import Nav from "./Nav";
import style from "../styles/page3.module.css";
import Bubble from "./Bubble";
import { RiCopperDiamondLine } from "react-icons/ri";
import { IoTriangleSharp } from "react-icons/io5";

const Page3 = () => {
  return (
    <div>
      <Nav />
      <div className={style.titlediv}>
        <h4 className={style.head}> Desgin faster</h4>
      </div>

      <div className={style.maingraph}>
        <div className={style.maincircle}>
          <div className={style.circle1}>
            <div className={style.circle2}>
              <div className={style.circle3}>
                <RiCopperDiamondLine />
              </div>
            </div>
          </div>
        </div>
        <div className={style.tediv}>
          <p className={style.pdiv}> Total earning</p>
          <h5 className={style.h5}> $12,875</h5>
          <IoTriangleSharp className={style.tri} />
        </div>
        <div className={style.pdr}>
          <div className={style.graph1}>
            <p>Presentation</p>
            <p style={{ opacity: "0.6" }}>862</p>
            <svg
              width="68"
              height="13"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C8.62687 3 7.61194 12 17.7612 12C27.9104 12 25.3731 5 34 5C42.6269 5 44.5157 1 51.2537 1C57.7936 1 59.3731 10.5 68 10.5"
                stroke="#8676FF"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={style.graph2}>
          <p>Development</p>
          <p style={{ opacity: "0.6" }}>753</p>
          <svg
            width="68"
            height="13"
            viewBox="0 0 68 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.92896C8.69077 8.92896 7.66833 5.47584 17.8928 5.47584C28.1172 5.47584 25.5611 11.9524 34.2519 11.9524C42.9426 11.9524 44.8455 6.92896 51.6334 6.92896C58.2217 6.92896 59.3092 1 68 1"
              stroke="#FF708B"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className={style.graph3}>
          <p>Research</p>
          <p style={{ opacity: "0.6" }}>553</p>
          <svg
            width="67"
            height="10"
            viewBox="0 0 67 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1C8.62687 1 6.85075 7.75 17 7.75C27.1493 7.75 25.3731 4 34 4C42.6269 4 42.262 8.875 49 8.875C55.5398 8.875 58.3731 1 67 1"
              stroke="#FFBA69"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={style.infomer1}>
        <div className={style.info1}>
          <p className={style.earninginfo}>Total earning</p>
          <h4 className={style.earningmoney}>$12,875</h4>
          <p className={style.arrow}>
            <IoTriangleSharp /> 10%
          </p>
          <p className={style.diff}>Compared to $21,490 last year</p>
          <span className={style.line}></span>
          <div className={style.info2}>
            <p className={style.earninginfo2}>Sales</p>
            <h4 className={style.earningmoney2}>$43,123</h4>
            <p className={style.arrow2}>
              <IoTriangleSharp /> 12%
            </p>
            <p className={style.diff2}>Compared to $21,490 last year</p>

          </div>
        </div>
      </div>
      <div className={style.threeletter}>
        <div className={style.firstData}>
          <p className={style.firstPara}>Travel
            <span className={style.firstSpan}>760</span>
            <span className={style.firstSpan1}>2,540
              <IoTriangleSharp className={style.firstArrow} />
            </span>
          </p>
        </div>
        <div className={style.firstData2}>
          <p className={style.firstPara2}>Presention
            <span className={style.firstSpan2}>660</span>
            <span className={style.firstSpan21}>2,340
              <IoTriangleSharp className={style.firstArrow2} />
            </span>
          </p>
        </div>
        <div className={style.firstData3}>
          <p className={style.firstPara3}>Business
            <span className={style.firstSpan3}>621</span>
            <span className={style.firstSpan31}>2,140
              <IoTriangleSharp className={style.firstArrow3} />
            </span>
          </p>
        </div>
      </div>
      <Bubble />
    </div>
  );
};

export default Page3;
