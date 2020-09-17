import React from 'react';
import Card from '../card/card.component';
import './card-collection.styles.css';

const CardCollection = ({ items }) => (
  <div className='card-collection'>
    {items.data
      .filter((item, idx) => idx < 10)
      .map((item) => (
        <Card key={item.id} item={item} />
      ))}
  </div>
);

export default CardCollection;
