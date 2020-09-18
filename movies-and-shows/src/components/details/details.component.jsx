import React from 'react';
import './details.styles.css';

// this.props.items.data se mapiralo u card collection

class Details extends React.Component {
  render() {
    const showName = this.props.item.name;

    return (
      // <div className='movie-details'>Name: {this.props.item.name}</div>
      <div className='movie-details'>
        {showName ? (
          <div className='movie-details'> Name : {this.props.item.name} </div>
        ) : (
          <div className='movie-details'>Name: {this.props.item.title}</div>
        )}
      </div>
    );
  }
}

export default Details;
