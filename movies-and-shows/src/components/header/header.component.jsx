import React from 'react';
import CustomButton from '../customButton/customButton.component';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => (
  <div className='header'>
    <Link to='/movies'>
      <CustomButton name={'movies'}></CustomButton>
    </Link>
    <Link to='/'>
      <CustomButton name={'shows'}></CustomButton>
    </Link>
  </div>
);

export default Header;
