import React from 'react'
import { LuSearch, LuShoppingCart, LuUser, LuChevronDown } from "react-icons/lu";

const Header = () => {
    return (
        <div id='hd' className='position-absolute'>
            <div className='position-relative'>
                <div className="hdwrap d-flex justify-content-between align-items-center">
                    <h1><a href=""><img src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_(2019).svg`} alt="top-logo" /></a></h1>
                    <ul className='gnb d-flex'>
                        <li className='product mx-3'>
                            <a href="">Product<LuChevronDown/></a>
                            <ul className='lnb position-absolute d-flex justify-content-center align-items-center'>
                                <li className='lnb-menu'>
                                    <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/ie_600_product_shot.png`} alt="" /></a></div>
                                    <a className='lnb-text' href="">이어폰</a>
                                </li>                            
                                <li className='lnb-menu'>
                                    <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/HD_660S2_ATF_Main_Image.png`} alt="" /></a></div>
                                    <a className='lnb-text' href="">헤드폰</a>
                                </li>
                                <li className='lnb-menu'>
                                    <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/soundbar_plus_iso_front_dolby_atmos_final.png`} alt="" /></a></div>
                                    <a className='lnb-text' href="">AMBEO</a>
                                </li>
                                <li className='lnb-menu'>
                                    <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/product_detail_x2_desktop_HDV-820_1_Sennheiser.png`} alt="" /></a></div>
                                    <a className='lnb-text' href="">기타</a>
                                </li>
                                <li className='lnb-menu'>
                                    <div className='lnb-img'><a href=""><img src={`${process.env.PUBLIC_URL}/img/lnbimg/product_detail_x2_desktop_Sennheiser_accessory_HD600_cable_and_adapter.png`} alt="" /></a></div>
                                    <a className='lnb-text' href="">부품/ACC</a>
                                </li>
                            </ul>
                        </li>
                        <li className='mx-3'><a href="">Support</a></li>
                        <li className='mx-3'><a href="">Downloads</a></li>
                    </ul>
                    <ul className='side-nav d-flex align-items-center'>
                        <div className='language position-relative'>
                            <a href=""><img src={`${process.env.PUBLIC_URL}/img/language/kr.svg`} alt="Kr" /></a>
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
        </div>
    )
}

export default Header