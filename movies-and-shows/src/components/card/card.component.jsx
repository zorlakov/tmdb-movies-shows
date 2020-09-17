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
    <div className='basicInfo'>
      {' '}
      <h1 className='title'> {show.name} </h1>
      <h2 className='title'> ({show.first_air_date.substring(0, 4)})</h2>
      <h3 className='title'> Rating: {show.vote_average} </h3>
    </div>
  </div>
);

export default Card;
