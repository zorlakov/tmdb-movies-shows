import React from 'react';
import Card from '../card/card.component';
import { Link } from 'react-router-dom';

import './card-collection.styles.css';

class CardCollection extends React.Component {
  render() {
    return (
      <div className='card-collection'>
        {this.props.items
          .filter((item, idx) => idx < this.props.count)
          .map((item) => (
            <Link
              className='link-styles'
              key={item.id}
              to={{ pathname: `/details/${item.id}`, state: { item } }}
            >
              <Card key={item.id} item={item} />
            </Link>
          ))}
      </div>
    );
  }
}

export default CardCollection;
