import React from 'react';
import './card.styles.css';

const Card = ({ show }) => (
  <div className='card-container'>
    <div
      className='image'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${show.backdrop_path})`,
      }}
    ></div>
    <div className='basic-info'>
      {' '}
      <p className='title'> {show.name} </p>
      <p className='title'> ({show.first_air_date.substring(0, 4)})</p>
    </div>
  </div>
);

export default Card;
