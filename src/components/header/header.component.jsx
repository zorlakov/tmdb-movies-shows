import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import SearchBox from '../search-box/search-box.component';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => (
  <div className='header'>
    <div className='nav-buttons'>
      <Link to='/movies'>
        <CustomButton name={'Movies'}></CustomButton>
      </Link>
      <Link to='/shows'>
        <CustomButton name={'Shows'}></CustomButton>
      </Link>
    </div>

    <div className='top-rated'>
      {window.location.pathname === '/movies' ? (
        <h1>TOP 10 MOVIES</h1>
      ) : (
        <h1>TOP 10 TV SHOWS</h1>
      )}
    </div>
    <div className='search'>
      <SearchBox timer={null} />
    </div>
  </div>
);

export default Header;
