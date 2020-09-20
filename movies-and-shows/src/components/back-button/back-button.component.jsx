import React from 'react';

import './back-button.styles.css';

class BackButton extends React.Component {
  goBack = () => {
    window.history.back();
  };

  render() {
    return (
      <button className='back-button' onClick={this.goBack}>
        CLICK ME
      </button>
    );
  }
}
export default BackButton;
