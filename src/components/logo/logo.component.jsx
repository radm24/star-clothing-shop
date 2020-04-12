import React from 'react';
import { Link } from 'react-router-dom';
import starLogo from '../../assets/star-logo.png';

import './logo.styles.scss';

const Logo = props => (
    <Link to='/'>
        <img src={starLogo} alt='Star Clothing'/>
    </Link>
)

export default Logo;