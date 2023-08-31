import React from 'react'
import { LuSearch, LuShoppingCart, LuUser, LuChevronDown } from "react-icons/lu";

const Header = () => {
    return (
        <div id='hd' className='position-relative'>
            <div className="hdwrap d-flex justify-content-between align-items-center">

                <h1><a href=""><img src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_(2019).svg`} alt="top-logo" /></a></h1>
                <ul className='gnb d-flex'>
                    <li className='mx-3'>
                        <a href="">Product<LuChevronDown/></a>
                        <ul className='lnb position-absolute d-flex justify-content-center align-items-center'>
                            <li className='lnb-menu'>
                                <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/HD_660S2_ATF_Main_Image.png`} alt="" /></a></div>
                                <div className='lnb-text mt-5'><a href="">이어폰</a></div>
                            </li>                            
                            <li className='lnb-menu'>
                                <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/HD_660S2_ATF_Main_Image.png`} alt="" /></a></div>
                                <div className='lnb-text'><a href="">헤드폰</a></div>
                            </li>
                            <li className='lnb-menu'>
                                <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/ie_600_product_shot.png`} alt="" /></a></div>
                                <div className='lnb-text'><a href="">AMBEO</a></div>
                            </li>
                            <li className='lnb-menu'>
                                <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/ie_600_product_shot.png`} alt="" /></a></div>
                                <div className='lnb-text'><a href="">기타</a></div>
                            </li>
                            <li className='lnb-menu'>
                                <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/ie_600_product_shot.png`} alt="" /></a></div>
                                <div className='lnb-text'><a href="">부품/ACC</a></div>
                            </li>
                        </ul>
                    </li>
                    <li className='mx-3'><a href="">Support</a></li>
                    <li className='mx-3'><a href="">Downloads</a></li>
                </ul>
                <ul className='side-nav d-flex align-items-center'>
                    <div className='language position-relative'>
                        <a><img src={`${process.env.PUBLIC_URL}/img/language/kr.svg`} alt="Kr" /></a>
                        <ul className='position-absolute'>
                            <li><a href=""><img src={`${process.env.PUBLIC_URL}/img/language/jp.svg`} alt="Jp" /></a></li>
                            <li><a href=""><img src={`${process.env.PUBLIC_URL}/img/language/Global.jpg`} alt="Gb" /></a></li>
                        </ul>
                    </div>
                    <li><a href=""><LuSearch className='d-block' /></a></li>
                    <li><a href=""><LuUser className='d-block' /></a></li>
                    <li><a href=""><LuShoppingCart className='d-block' /></a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header