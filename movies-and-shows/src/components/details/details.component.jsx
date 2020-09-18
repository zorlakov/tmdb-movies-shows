import React from 'react';
import { URL_IMG, IMAGE_SIZE_M } from '../../utils/api';
import './details.styles.css';

// this.props.items.data se mapiralo u card collection

class Details extends React.Component {
  render() {
    const item = this.props.item;
    const showName = this.props.item.name;

    return (
      // <div className='movie-details'>Name: {this.props.item.name}</div>

      <div className='item-details'>
        <div className='main-details'>
          <img
            src={URL_IMG + IMAGE_SIZE_M + item.backdrop_path}
            alt='coverImage'
            className='details-image'
          ></img>
          {showName ? (
            <h1 className='details-title'>
              {' '}
              {item.name} ({item.first_air_date.substring(0, 4)})
            </h1>
          ) : (
            <h1 className='details-title'>
              {' '}
              {item.title}({item.release_date.substring(0, 4)})
            </h1>
          )}
        </div>

        <div className='other-info'>
          <div className='simple-text'>
            <p className='overview-text'>
              Summary: <br></br>
              {item.overview}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
