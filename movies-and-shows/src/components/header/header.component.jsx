import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import SearchBox from '../search-box/search-box.component';
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
    <SearchBox timer={null} />
  </div>
);

export default Header;
