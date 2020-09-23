import React from 'react';
import { URL_IMG, IMAGE_SIZE_XL, URL_YOUTUBE } from '../../utils/api';
import BackButton from '../back-button/back-button.component';
import starRating from '../../assets/star.svg';
import runtimeIcon from '../../assets/clock.svg';

import './details.styles.css';

class Details extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const item = this.props.item;
    const show = this.props.show;
    const movie = this.props.movie;
    const trailerUrl = this.props.trailerUrl;

    const showName = this.props.item.name;
    return (
      <div className='item-details'>
        <div className='main-details'>
          <BackButton className='back-button'></BackButton>

          {trailerUrl ? (
            <iframe
              src={URL_YOUTUBE + trailerUrl.key}
              allow='autoplay; encrypted-media'
              title='video'
              className='details-image'
            />
          ) : (
            <img
              src={
                item.backdrop_path
                  ? URL_IMG + IMAGE_SIZE_XL + item.backdrop_path
                  : 'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png'
              }
              alt='coverImage'
              className='details-image'
            ></img>
          )}
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
          <p className='containter'>
            <span className='runtime-info'>
              <img
                alt='runtime-clock'
                src={runtimeIcon}
                className='runtime-icon'
              />
              {showName ? (
                <span className='vote-info'>
                  {' '}
                  {show.episode_run_time} minutes{' '}
                </span>
              ) : (
                <span className='vote-info'> {movie.runtime} minutes</span>
              )}
            </span>

            <span className='star-ratings'>
              <img alt='starIcon' src={starRating} className='star-icon' />
              <span className='vote-info'> {item.vote_average}/10 </span>
              <span className='vote-info'> ({item.vote_count} votes)</span>
            </span>
          </p>
        </div>

        <div className='other-info'>
          <p className='overview-text'>
            <span className='info-name'>
              Synopsis: <br></br> <br></br>
            </span>
            <span className='info-text'>{item.overview}</span>
          </p>
          {showName ? (
            [
              <div className='show-info'>
                <p>
                  <span className='info-name'>Seasons: </span>
                  <span className='info-text'> {show.number_of_seasons} </span>
                </p>
                <p>
                  <span className='info-name'>Episodes: </span>{' '}
                  <span className='info-text'> {show.number_of_episodes} </span>
                </p>
                <p>
                  <span className='info-name'>Status: </span>
                  <span className='info-text'> {show.status} </span>
                </p>
              </div>,
            ]
          ) : (
            <div className='movie-info'>
              <p>
                <span className='info-name'>Status: </span>
                <span className='info-text'> {movie.status} </span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Details;
