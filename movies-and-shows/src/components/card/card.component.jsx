import React from 'react';
import { URL_IMG, IMAGE_SIZE_M } from '../../utils/api';

import './card.styles.css';

const Card = ({ item }) => (
  <div className='card-container'>
    {/*    <div
      className='image'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})` ,
      }}
    ></div> */}
    <img
      src={
        item.backdrop_path
          ? URL_IMG + IMAGE_SIZE_M + item.backdrop_path
          : 'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'
      }
      alt='coverImage'
      className='image'
    ></img>

    <div className='basic-info'>
      {item.name ? (
        <p className='title'>{item.name}</p>
      ) : (
        <p className='title'>{item.title}</p>
      )}
    </div>
  </div>
);

export default Card;
