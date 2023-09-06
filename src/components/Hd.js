import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LuChevronDown } from "react-icons/lu";

import sicon from '../svg/search.svg';
import cicon from '../svg/cart.svg';
import uicon from '../svg/user.svg'





const Header = () => {

    const [ isScrolled, setIsScrolled] = useState(false);
    const [ languages, languageSet ]  = useState("kr");
    const [ searchv, searchvShow] = useState(false);

    const handleScroll = () => {
       
        const threshold = 100; 
    
        if (window.scrollY > threshold) {
          
          setIsScrolled(true);
        } else {
         
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
        <>
        { searchv && <button  onClick={ ()=>{ searchvShow(false) }} className='text-white' style={{height:500}}>버튼</button> }
        
        <div id='hd' className='fixed-top'>
            <div className={`hd-ad ${ isScrolled ? 'go-up' : '' }`}><a className='d-block text-center' href=""><span>회원가입 후 첫 구매시 10% 할인 코드 제공</span></a></div>            
            <div className={ `hdwrap d-flex justify-content-between align-items-center bg-transparent` }>
                <h1><Link to='/'><img src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo.svg`} alt="top-logo" /></Link></h1>
                <ul className='gnb d-flex'>
                    <li className='product mx-3'>
                        <a href="">Product<LuChevronDown className='ms-1'/></a>
                        <ul className='lnb position-absolute d-flex justify-content-center align-items-center text-center'>
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
                    <li>
                        <div className='language position-relative'>
                            <button onClick={ ()=>{ languageSet('kr')}}>KR<LuChevronDown/></button>
                            <ul className='position-absolute'>
                                <li><button onClick={ ()=>{ languageSet('jp')}}>JP</button></li>
                                <li><button onClick={ ()=>{ languageSet('eng')}}>ENG</button></li>
                            </ul>
                        </div>
                    </li>                        
                    <li><button onClick={ ()=>{ searchvShow(true)}} ><img src={sicon} /></button></li>
                    <li><Link to='/user'><img src={uicon} /></Link></li>
                    <li><Link to='/cart'><img src={cicon} /></Link></li>
                </ul>
            </div>
                    
        </div>
        </>
    )
}

export default Header