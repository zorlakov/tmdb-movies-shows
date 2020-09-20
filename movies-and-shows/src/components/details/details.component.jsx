import React from 'react';
import { URL_IMG, IMAGE_SIZE_M } from '../../utils/api';
import BackButton from '../back-button/back-button.component';
import './details.styles.css';

class Details extends React.Component {
  render() {
    const item = this.props.item;
    const show = this.props.show;
    const movie = this.props.movie;

    const showName = this.props.item.name;
    return (
      <div className='item-details'>
        <BackButton></BackButton>
        <div className='main-details'>
          <img
            src={
              item.backdrop_path
                ? URL_IMG + IMAGE_SIZE_M + item.backdrop_path
                : 'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'
            }
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
              {item.title} ({item.release_date.substring(0, 4)})
            </h1>
          )}
        </div>

        <div className='other-info'>
          <div className='simple-text'>
            <p className='overview-text'>
              Summary: <br></br>
              {item.overview}
            </p>
            <p>Rating: {item.vote_average}</p>
            <p>Number of votes: {item.vote_count}</p>
            {showName ? (
              [
                <div className='show-info'>
                  <p>Seasons: {show.number_of_seasons} </p>
                  <p> Episodes: {show.number_of_episodes} </p>
                  <p>Episode length: {show.episode_run_time} minutes </p>
                  <p> Status: {show.status} </p>
                </div>,
              ]
            ) : (
              <div className='movie-info'>
                <p> Runtime: {movie.runtime} </p>
                <p> Status: {movie.status}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
