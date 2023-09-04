import React, { useState, useEffect } from 'react'
import { LuSearch, LuShoppingCart, LuUser, LuChevronDown } from "react-icons/lu";





const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        // 스크롤 위치를 확인하고, 원하는 임계값에 따라 클래스를 추가 또는 제거합니다.
        const threshold = 100; // 스크롤 임계값 설정
    
        if (window.scrollY > threshold) {
          // 스크롤 위치가 임계값을 넘으면 클래스를 추가합니다.
          setIsScrolled(true);
        } else {
          // 스크롤 위치가 임계값 이하면 클래스를 제거합니다.
          setIsScrolled(false);
        }
    };

    useEffect(() => {
          window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    

   




    return (
        <div id='hd' className='fixed-top'>
            <div className='position-relative'>
                <div className={ `hdwrap d-flex justify-content-between align-items-center ${ isScrolled ? 'bg-transparent' : '' }` }>
                    <h1><a href=""><img src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo.svg`} alt="top-logo" /></a></h1>
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
                            <a href="">KR<LuChevronDown/></a>
                            <ul className='position-absolute'>
                                <li><a href="">JP</a></li>
                                <li><a href="">GB</a></li>
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