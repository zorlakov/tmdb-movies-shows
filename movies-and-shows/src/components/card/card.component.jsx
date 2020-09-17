import React from 'react';
import './card.styles.css';

const Card = () => (
  <div className='card-container'>
    <div
      className='image'
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg)`,
      }}
    ></div>
    <h1 className='title'>TITLE</h1>
  </div>
);

export default Card;
