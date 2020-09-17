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
  const { data } = props;
  const { fetchTopShows } = props;

  useEffect(() => {
    // const { dispatch } = this.props;
    fetchTopShows();
  }, []);

  console.log(data);

  return (
    <div className='cards'>
      {data.shows.data.map((show) => (
        <Card key={show.id} show={show} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, { fetchTopShows })(HomePage);
