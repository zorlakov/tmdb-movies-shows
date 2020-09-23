import React from 'react';
import backIcon from '../../assets/left-arrow.svg';

import './back-button.styles.css';

class BackButton extends React.Component {
  goBack = () => {
    window.history.back();
  };

  render() {
    return (
      <img
        alt='backIcon'
        className='back-icon'
        src={backIcon}
        onClick={this.goBack}
      />
    );
  }
}
export default BackButton;
