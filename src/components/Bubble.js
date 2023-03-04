import React from 'react'
import style from "../styles/Bubble.module.css";
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { GrEmptyCircle } from "react-icons/gr"
import { GiNetworkBars } from "react-icons/gi"
import { FiEye } from "react-icons/fi"
import { FaBullseye } from "react-icons/fa"
const Bubble = () => {
    return (
        <div >

            <p className={style.time}>Timeline</p>
            <div className={style.head}>
                <div className={style.headAll} >
                    <span className={style.spanOne}>1W</span>
                    <span className={style.spanTwo}>1M</span>
                    <span className={style.spanThree}>3M</span>
                    <span className={style.spanFour}>1Y</span>
                    <span className={style.spanAll}>All</span>
                </div>
            </div>
            <div className={style.disigns}>
                <div className={style.disignOne}></div>
                <div className={style.disignTwo}></div>
                <div className={style.disignThree} ></div>
            </div>

            <div className={style.slider}>
                <div className={style.sliderone}>
                    <AiOutlinePlus className={style.plus} />
                    <AiOutlineMinus className={style.minus} />
                </div>
                <div className={style.slidertwo}>
                    <GrEmptyCircle className={style.emptyCircle} />
                </div>
                <div className={style.sliderthree}>
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.10495 12.2102C5.7586 12.4693 6.30051 12.9497 6.63613 13.5676C6.97175 14.1855 7.07975 14.9016 6.9413 15.5909C6.80285 16.2803 6.42673 16.8992 5.87858 17.3396C5.33043 17.7799 4.64505 18.0138 3.94204 18.0005C3.23903 17.9871 2.56303 17.7273 2.032 17.2665C1.50098 16.8056 1.14864 16.1729 1.03648 15.4787C0.924318 14.7846 1.05945 14.0731 1.4183 13.4685C1.77715 12.8638 2.33692 12.4043 2.99995 12.1702V5.83023C2.33245 5.59432 1.76985 5.13003 1.41159 4.51942C1.05332 3.90881 0.92246 3.1912 1.04213 2.49344C1.16181 1.79567 1.52431 1.16268 2.06557 0.706352C2.60683 0.250023 3.29199 -0.000262044 3.99995 -0.000262044C4.7079 -0.000262044 5.39306 0.250023 5.93432 0.706352C6.47558 1.16268 6.83808 1.79567 6.95776 2.49344C7.07743 3.1912 6.94657 3.90881 6.58831 4.51942C6.23004 5.13003 5.66744 5.59432 4.99995 5.83023V9.00023C5.83595 8.37223 6.87395 8.00023 7.99995 8.00023H11.9999C12.6581 8.00025 13.2979 7.78395 13.821 7.38461C14.3441 6.98528 14.7215 6.42506 14.8949 5.79023C14.2381 5.53013 13.6941 5.04666 13.3587 4.42492C13.0233 3.80318 12.9179 3.08304 13.0612 2.39128C13.2045 1.69952 13.5873 1.08049 14.1421 0.643167C14.6969 0.205846 15.3882 -0.0217274 16.0943 0.000511863C16.8004 0.0227512 17.476 0.293377 18.0022 0.764746C18.5284 1.23611 18.8714 1.87801 18.9709 2.57741C19.0704 3.27682 18.92 3.9889 18.5461 4.5883C18.1722 5.1877 17.5988 5.63598 16.9269 5.85423C16.7255 7.01491 16.1209 8.06723 15.2195 8.82572C14.3182 9.5842 13.178 10.0001 11.9999 10.0002H7.99995C7.34184 10.0002 6.70196 10.2165 6.17885 10.6158C5.65575 11.0152 5.27841 11.5754 5.10495 12.2102ZM3.99995 14.0002C3.73473 14.0002 3.48038 14.1056 3.29284 14.2931C3.1053 14.4807 2.99995 14.735 2.99995 15.0002C2.99995 15.2654 3.1053 15.5198 3.29284 15.7073C3.48038 15.8949 3.73473 16.0002 3.99995 16.0002C4.26516 16.0002 4.51952 15.8949 4.70705 15.7073C4.89459 15.5198 4.99995 15.2654 4.99995 15.0002C4.99995 14.735 4.89459 14.4807 4.70705 14.2931C4.51952 14.1056 4.26516 14.0002 3.99995 14.0002ZM3.99995 2.00023C3.73473 2.00023 3.48038 2.10558 3.29284 2.29312C3.1053 2.48066 2.99995 2.73501 2.99995 3.00023C2.99995 3.26544 3.1053 3.5198 3.29284 3.70733C3.48038 3.89487 3.73473 4.00023 3.99995 4.00023C4.26516 4.00023 4.51952 3.89487 4.70705 3.70733C4.89459 3.5198 4.99995 3.26544 4.99995 3.00023C4.99995 2.73501 4.89459 2.48066 4.70705 2.29312C4.51952 2.10558 4.26516 2.00023 3.99995 2.00023ZM15.9999 2.00023C15.7347 2.00023 15.4804 2.10558 15.2928 2.29312C15.1053 2.48066 14.9999 2.73501 14.9999 3.00023C14.9999 3.26544 15.1053 3.5198 15.2928 3.70733C15.4804 3.89487 15.7347 4.00023 15.9999 4.00023C16.2652 4.00023 16.5195 3.89487 16.7071 3.70733C16.8946 3.5198 16.9999 3.26544 16.9999 3.00023C16.9999 2.73501 16.8946 2.48066 16.7071 2.29312C16.5195 2.10558 16.2652 2.00023 15.9999 2.00023Z" fill="#5A5A89" /></svg>
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.874 4.9999C12.6516 5.85814 12.1504 6.61822 11.4493 7.16082C10.7481 7.70343 9.8866 7.99784 9 7.99784C8.1134 7.99784 7.2519 7.70343 6.55074 7.16082C5.84957 6.61822 5.34844 5.85814 5.126 4.9999H0V2.9999H5.126C5.34844 2.14166 5.84957 1.38158 6.55074 0.83897C7.2519 0.296364 8.1134 0.00195312 9 0.00195312C9.8866 0.00195312 10.7481 0.296364 11.4493 0.83897C12.1504 1.38158 12.6516 2.14166 12.874 2.9999H18V4.9999H12.874ZM9 5.9999C9.53043 5.9999 10.0391 5.78918 10.4142 5.41411C10.7893 5.03904 11 4.53033 11 3.9999C11 3.46946 10.7893 2.96076 10.4142 2.58568C10.0391 2.21061 9.53043 1.9999 9 1.9999C8.46957 1.9999 7.96086 2.21061 7.58579 2.58568C7.21071 2.96076 7 3.46946 7 3.9999C7 4.53033 7.21071 5.03904 7.58579 5.41411C7.96086 5.78918 8.46957 5.9999 9 5.9999Z" fill="#5A5A89" /></svg>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H14C14.5305 3 15.0392 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V13.17C16.6675 13.4059 17.2301 13.8702 17.5884 14.4808C17.9467 15.0914 18.0775 15.809 17.9578 16.5068C17.8382 17.2046 17.4757 17.8375 16.9344 18.2939C16.3931 18.7502 15.708 19.0005 15 19.0005C14.2921 19.0005 13.6069 18.7502 13.0657 18.2939C12.5244 17.8375 12.1619 17.2046 12.0422 16.5068C11.9225 15.809 12.0534 15.0914 12.4117 14.4808C12.7699 13.8702 13.3325 13.4059 14 13.17V5H12V8L7.50003 4L12 0V3ZM2.00003 6.83C1.33254 6.59409 0.769936 6.1298 0.41167 5.51919C0.0534039 4.90859 -0.0774567 4.19098 0.0422185 3.49321C0.161894 2.79545 0.524399 2.16246 1.06566 1.70613C1.60692 1.2498 2.29208 0.999512 3.00003 0.999512C3.70798 0.999512 4.39314 1.2498 4.9344 1.70613C5.47566 2.16246 5.83817 2.79545 5.95784 3.49321C6.07752 4.19098 5.94666 4.90859 5.58839 5.51919C5.23012 6.1298 4.66752 6.59409 4.00003 6.83V13.17C4.66752 13.4059 5.23012 13.8702 5.58839 14.4808C5.94666 15.0914 6.07752 15.809 5.95784 16.5068C5.83817 17.2046 5.47566 17.8375 4.9344 18.2939C4.39314 18.7502 3.70798 19.0005 3.00003 19.0005C2.29208 19.0005 1.60692 18.7502 1.06566 18.2939C0.524399 17.8375 0.161894 17.2046 0.0422185 16.5068C-0.0774567 15.809 0.0534039 15.0914 0.41167 14.4808C0.769936 13.8702 1.33254 13.4059 2.00003 13.17V6.83ZM3.00003 5C3.26525 5 3.5196 4.89464 3.70714 4.70711C3.89467 4.51957 4.00003 4.26522 4.00003 4C4.00003 3.73478 3.89467 3.48043 3.70714 3.29289C3.5196 3.10536 3.26525 3 3.00003 3C2.73481 3 2.48046 3.10536 2.29292 3.29289C2.10539 3.48043 2.00003 3.73478 2.00003 4C2.00003 4.26522 2.10539 4.51957 2.29292 4.70711C2.48046 4.89464 2.73481 5 3.00003 5ZM3.00003 17C3.26525 17 3.5196 16.8946 3.70714 16.7071C3.89467 16.5196 4.00003 16.2652 4.00003 16C4.00003 15.7348 3.89467 15.4804 3.70714 15.2929C3.5196 15.1054 3.26525 15 3.00003 15C2.73481 15 2.48046 15.1054 2.29292 15.2929C2.10539 15.4804 2.00003 15.7348 2.00003 16C2.00003 16.2652 2.10539 16.5196 2.29292 16.7071C2.48046 16.8946 2.73481 17 3.00003 17ZM15 17C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8947 16.5196 16 16.2652 16 16C16 15.7348 15.8947 15.4804 15.7071 15.2929C15.5196 15.1054 15.2652 15 15 15C14.7348 15 14.4805 15.1054 14.2929 15.2929C14.1054 15.4804 14 15.7348 14 16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4805 16.8946 14.7348 17 15 17Z" fill="#5A5A89" /></svg>
                </div>
            </div>
            <div className={style.buble1}></div>
            <div className={style.buble2}></div>
            <div className={style.buble3}></div>
            <div className={style.buble4}></div>
            <div className={style.buble5}></div>

            <div className={style.bigwidget}>
                <div className={style.smallwidget}>

                    <span className={style.bigbubble}>
                        <p className={style.bigpara1}>Inversment<br />
                            <span className={style.bigspan1}>$76,644</span><br />
                            <span className={style.months}>3 Months</span>
                        </p>
                    </span>
                    <span className={style.bubleinversment}>
                        <p className={style.finance}>
                            <span className={style.finance1}>Finance  <br /></span>
                            <span className={style.financeamount}>$23,657</span>
                        </p>
                    </span>
                    <span className={style.bubledevelopment}>
                        <p className={style.development}>
                            <span className={style.finance2}>Development  <br /></span>
                            <span className={style.financeamount2}>$31,657</span>
                        </p>
                    </span>
                    <span className={style.bubleDisign}>
                        <p className={style.bigpara1}>Design<br />
                            <span className={style.bigspan1}>$32,982</span><br />
                            <span className={style.months}>3 Months</span>
                        </p>
                    </span>
                    <span className={style.bubleBuss}>
                        <p className={style.development}>
                            <span className={style.finance2}>Bussiness  <br /></span>
                            <span className={style.financeamount2}>$21,987</span>
                        </p>
                    </span>
                    <span className={style.bubleempty}>

                    </span>

                </div>
                <span className={style.bubleyellow}>

                </span>
                <span className={style.bublbluesmall}>

                </span>
                <span className={style.bublbluesmall2}>

                </span>
                <span className={style.bublbluesmall3}>

                </span>
                <span className={style.bublbluesmall4}>

                </span>
                <span className={style.bublbluesmall5}>

                </span>
                <span className={style.bublbluesmall6}>

                </span>



            </div>
            <span className={style.bublbluemedium1}>

            </span>
            <span className={style.bublbluemedium2}>

            </span>
            <div className={style.informerTrade}>
                <span className={style.informetTradeicon} ></span>
                <GiNetworkBars className={style.tradeicon} />
                <p className={style.informerparagraph}>
                    <span className={style.infoletter}>STORE DINAMICS</span>
                    <span className={style.infonumber}>324</span>
                </p>
            </div>
            <div className={style.informerTrade1}>
                <span className={style.informetTradeicon1} ></span>
                <FiEye className={style.tradeicon1} />
                <p className={style.informerparagraph1}>
                    <span className={style.infoletter1}>SHOPPING VIEW</span>
                    <span className={style.infonumber1}>65,540</span>
                </p>
            </div>
            <div className={style.informerTrade2}>
                <span className={style.informetTradeicon2} ></span>
                <FaBullseye className={style.tradeicon2} />
                <p className={style.informerparagraph2}>
                    <span className={style.infoletter2}>TRADE GOODS</span>
                    <span className={style.infonumber2}>204</span>
                </p>
            </div>

        </div>
    )
}

export default Bubble