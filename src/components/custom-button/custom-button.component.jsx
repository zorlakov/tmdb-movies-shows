import React from 'react';
import tvIcon from '../../assets/television.svg';
import movieIcon from '../../assets/clapperboard.svg';
import './custom-button.styles.css';

const CustomButton = ({ name }) => (
  <button className='custom-button'>
    {name === 'Movies' ? (
      <img alt='icon' className='icon' src={movieIcon} />
    ) : (
      <img alt='icon' className='icon' src={tvIcon} />
    )}
    {name}
  </button>
);

export default CustomButton;
