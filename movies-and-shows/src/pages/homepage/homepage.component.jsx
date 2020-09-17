import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows } from '../../redux/actions/index';
import Card from '../../components/card/card.component';

import './homepage.styles.css';

/* class HomePage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopShows());
  }

  render() {
    const shows = this.props;

    return (
      <div className='cards'>
        {this.props.map(({ id, ...otherProps }) => (
          <Card key={id} {...otherProps} />
        ))}
      </div>
    );
  }
} */

const HomePage = (props) => {
  const data = props;
  const { fetchTopShows } = props;

  useEffect(() => {
    // const { dispatch } = this.props;
    fetchTopShows();
  }, []);

  return <div> OASOOSFAOFSOA </div>;
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, { fetchTopShows })(HomePage);
