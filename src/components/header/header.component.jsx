import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import SearchBox from '../search-box/search-box.component';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => (
  <div className='header'>
    <div className='nav-buttons'>
      <Link to='/movies'>
        <CustomButton name={'movies'}></CustomButton>
      </Link>
      <Link to='/shows'>
        <CustomButton name={'shows'}></CustomButton>
      </Link>
    </div>

    <div className='top-rated'>
      {window.location.pathname === '/movies' ? (
        <h1>Top 10 movies</h1>
      ) : (
        <h1>Top 10 TV shows</h1>
      )}
    </div>
    <SearchBox timer={null} />
  </div>
);

export default Header;
