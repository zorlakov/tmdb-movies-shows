import React from 'react';
import Card from '../card/card.component';
import './card-collection.styles.css';

const CardCollection = ({ shows }) => (
  <div className='card-collection'>
    {shows.data.map((show) => (
      <Card key={show.id} show={show} />
    ))}
  </div>
);

export default CardCollection;
