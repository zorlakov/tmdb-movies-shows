import React from 'react';
import tvIcon from '../../assets/television.svg';
import movieIcon from '../../assets/clapperboard.svg';
import './customButton.styles.css';

const CustomButton = ({ name }) => (
  <button className='custom-button'>
    {name == 'movies' ? (
      <img className='image' src={movieIcon} />
    ) : (
      <img className='image' src={tvIcon} />
    )}
    {name}
  </button>
);

export default CustomButton;
