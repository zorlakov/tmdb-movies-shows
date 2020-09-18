import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.css';

const Card = ({ item }) => (
  <Link to='/details' className='link-styles'>
    <div className='card-container'>
      <div
        className='image'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})`,
        }}
      ></div>

      <div className='basic-info'>
        {item.name ? (
          <p className='title'>{item.name}</p>
        ) : (
          <p className='title'>{item.title}</p>
        )}

        {item.first_air_date ? (
          <p className='title'> {item.first_air_date.substring(0, 4)}</p>
        ) : (
          <p className='title'>{item.release_date.substring(0, 4)} </p>
        )}
      </div>
    </div>
  </Link>
);

export default Card;
