import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LuChevronDown } from "react-icons/lu";

import sicon from '../svg/search.svg';
import cicon from '../svg/cart.svg';
import uicon from '../svg/user.svg';

import siconb from '../svg/search_b.svg';
import ciconb from '../svg/cart-b.svg';
import uiconb from '../svg/user-b.svg';





const Header = (props) => {

    const [ isScrolled, setIsScrolled] = useState(false);
    const [ languages, languageSet ]  = useState("kr");
    const [ searchv, searchvShow] = useState(false);

    const handleScroll = () => {
       
        const threshold = 0; 
    
        if (window.scrollY > threshold) {          
            document.querySelector('#hd').classList.add('white-img')
        } else {
         
            document.querySelector('#hd').classList.remove('white-img')
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
            <div className='hd-ad'><a className='d-block text-center' href="#none"><span>회원가입 후 첫 구매시 10% 할인 코드 제공</span></a></div>            
            <div className={ `hdwrap d-flex justify-content-between align-items-center ${ isScrolled ? 'bg-transparent' : '' }` }>
                <h1>
                    <Link to='/'>
                        <img className='top-w' src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_w.svg`} alt="top-logo_w" />
                        <img className='top-b' src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_b.svg`} alt="top-logo_b" />
                    </Link>
                </h1>
                <ul className='gnb d-flex'>
                    <li className='product mx-3'>
                        <a href="https://www.sennheiserkorea.com/collections/all-products">Product<LuChevronDown className='ms-1'/></a>
                        <ul className='lnb position-absolute d-flex justify-content-center align-items-center text-center'>

                            {
                                props.info.gnbdb.map((v,i)=>{
                                    return(
                                        <li className='lnb-menu'>
                                            <div className='lnb-img'><a href={v.link}><img src={`${process.env.PUBLIC_URL}${v.src}`} alt={v.alt} /></a></div>
                                            <a className='lnb-text' href={v.link}>{v.name}</a>
                                        </li>
                                    )
                                })
                            }

                        
                        </ul>
                    </li>
                    <li className='mx-3'><a href="https://www.sennheiserkorea.com/pages/service-center">Support</a></li>
                    <li className='mx-3'><a href="https://ko-kr.sennheiser.com/download">Downloads</a></li>
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
                    <li>
                        <button className='top-w' onClick={ ()=>{ searchvShow(true)}} ><img src={sicon} /></button>
                        <button className='top-b' onClick={ ()=>{ searchvShow(true)}} ><img src={siconb} /></button>
                    </li>
                    <li><Link to='/user'><img className='top-w' src={uicon} /><img className='top-b' src={uiconb} /></Link></li>
                    <li><a href="https://www.sennheiserkorea.com/cart"><img className='top-w' src={cicon} /><img className='top-b' src={ciconb} /></a></li>
                </ul>
            </div>
                    
        </div>
        </>
    )
}

export default Header