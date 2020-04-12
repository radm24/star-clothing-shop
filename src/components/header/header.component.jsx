import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.component';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className="logo-container">
            <Logo />
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;