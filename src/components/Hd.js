import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronDown } from "react-icons/lu";
import { LiaPlusSolid } from "react-icons/lia";

import sicon from '../svg/search.svg';
import cicon from '../svg/cart.svg';
import uicon from '../svg/user.svg';

import siconb from '../svg/search_b.svg';
import ciconb from '../svg/cart-b.svg';
import uiconb from '../svg/user-b.svg';
import closeicon from '../svg/close.svg';
import menuicon from '../svg/m-menu.svg'
import menuiconb from '../svg/m-menu-b.svg'



const Header = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [languages, languageSet] = useState("kr");
    const [searchv, setSearchv] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(false);

    const handleScroll = () => {
        const threshold = 0;

        if (window.scrollY > threshold) {
            document.querySelector('#hd').classList.add('white-img');
        } else {
            document.querySelector('#hd').classList.remove('white-img');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (searchv) {
            document.querySelector('#hd').classList.add('white-img');
        } else {
            document.querySelector('#hd').classList.remove('white-img');
        }
    }, [searchv]);

    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);
    };

    const toggleSubMenu = () => {
        const lnb = document.querySelector('.m-lnb');
        lnb.classList.toggle('show-menu');
    };

    return (
        <>
            {searchv && (
                <div id='search-popup' className='fixed-top'>
                    <div className='search-wrap position-relative'>
                        <button onClick={() => { setSearchv(false) }} className='search-close-button position-absolute'><img src={closeicon} alt="닫기" /></button>
                        <div className='search-input position-absolute d-flex'>
                            <input type="text" name='senn-search' maxLength={255} placeholder='Search' spellcheck="false"/>
                            <button><img src={sicon} alt="검색" /></button>
                        </div>                        
                    </div>
                </div>
            )}

            <div id='hd' className='fixed-top'>
                <div className='hd-ad'><a className='d-block text-center' href="#none"><span>회원가입 후 첫 구매시 10% 할인 코드 제공</span></a></div>
                <div className={`hdwrap d-flex justify-content-between align-items-center ${isScrolled ? 'bg-transparent' : ''}`}>
                    <h1>
                        <Link to='/'>
                            <img className='top-w-logo' src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_w.svg`} alt="top-logo_w" />
                            <img className='top-b-logo' src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_b.svg`} alt="top-logo_b" />
                        </Link>
                    </h1>
                    <ul className='gnb d-flex'>
                        <li className='product mx-3'>
                            <a href="https://www.sennheiserkorea.com/collections/all-products">Product<LuChevronDown className='ms-1' /></a>
                            <ul className='lnb position-absolute d-flex justify-content-center align-items-center text-center'>
                                {props.info.gnbdb.map((v, i) => {
                                    return (
                                        <li key={i} className='lnb-menu'>
                                            <div className='lnb-img'><a href={v.link}><img src={`${process.env.PUBLIC_URL}${v.src}`} alt={v.alt} /></a></div>
                                            <a className='lnb-text' href={v.link}>{v.name}</a>
                                        </li>
                                    )
                                })}                                
                            </ul>
                        </li>
                        <li className='mx-3'><a href="https://www.sennheiserkorea.com/pages/service-center">Support</a></li>
                        <li className='mx-3'><a href="https://ko-kr.sennheiser.com/download">Downloads</a></li>
                    </ul>
                    <ul className='side-nav d-flex align-items-center'>
                        <li>
                            <div className='language position-relative'>
                                <button onClick={() => { languageSet('kr') }}>KR<LuChevronDown /></button>
                                <ul className='position-absolute'>
                                    <li><button onClick={() => { languageSet('jp') }}>JP</button></li>
                                    <li><button onClick={() => { languageSet('eng') }}>ENG</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className='m-disable'>
                            <button className='side-search top-w' onClick={() => { setSearchv(true); }}><img src={sicon} /></button>
                            <button className='side-search top-b' onClick={() => { setSearchv(true) }}><img src={siconb} /></button>
                        </li>
                        <li className='m-disable'>
                            <a href="https://www.sennheiserkorea.com/account/login">
                                <img className='top-w' src={uicon} /><img className='top-b' src={uiconb} />
                            </a>
                        </li>
                        <li className='m-disable'>
                            <a href="https://www.sennheiserkorea.com/cart">
                                <img className='top-w' src={cicon} />
                                <img className='top-b' src={ciconb} />
                            </a>
                        </li>
                        <li className='menu-icon ms-3'>
                            <button className='top-w' onClick={toggleSideMenu}>
                                <img src={menuicon} alt="메뉴" />                                
                            </button>
                            <button className='top-b' onClick={toggleSideMenu}>                                
                                <img src={menuiconb} alt="메뉴" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
            {showSideMenu && (
                <div className='side-menu position-fixed'>
                    <div className='side-menu-wrap position-relative'>
                        <div className='d-flex justify-content-end'>
                            <button className='menu-close-button' onClick={toggleSideMenu}><img src={closeicon} alt="닫기" /></button>
                        </div>                        
                        <div className='side-menu-link'>                            
                            <div className='m-gnb mt-2 d-flex justify-content-between'>
                                <a href="https://www.sennheiserkorea.com/collections/all-products">Product</a>
                                <button onClick={toggleSubMenu}><LiaPlusSolid color='#ddd'/></button>                                
                            </div>
                            <ul className='m-lnb'>

                                {props.info.mproductsdb.map((v,i)=>{
                                    return(
                                        <li key={i}><a href={v.link}>{v.nm}</a></li>
                                    )                                      
                                                                       
                                })}            

                            </ul>
                            <div className='m-gnb mt-2'><a href="https://www.sennheiserkorea.com/pages/service-center">Support</a></div>
                            <div className='m-gnb my-2'><a href="https://ko-kr.sennheiser.com/download">Downloads</a></div>                        
                        </div>
                        <div className="side-menu-sub">                            
                            <ul>
                                <li><button onClick={() => { setSearchv(true); }}>Search</button></li>
                                <li className='mt-2'><a href="https://www.sennheiserkorea.com/account/login">Log in</a></li>                                    
                            </ul>                       
                            
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    );
}

export default Header;
