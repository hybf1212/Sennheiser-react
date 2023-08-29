import React from 'react'
import { Search , Person , Cart } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <div id='hd'>
            <div className="wrap d-flex justify-content-between align-items-center">

                <h1><a href=""><img src="" alt="top-logo" /></a></h1>
                <ul className='d-flex'>
                    <li>
                        <a href="">Product</a>
                        
                    </li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Downloads</a></li>
                </ul>
                <ul className='d-flex'>
                    <li><a href=""><Search /></a></li>
                    <li><a href=""><Person /></a></li>
                    <li><a href=""><Cart /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header