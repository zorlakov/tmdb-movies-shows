import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows } from '../../redux/actions/index';
import Card from '../../components/card/card.component';
import CardCollection from '../../components/card-collection/card-collection.component';
import './homepage.styles.css';
import CardCollection from '../../components/card-collection/card-collection.component';

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
  let list = [];
  useEffect(() => {
    // const { dispatch } = this.props;
    fetchTopShows();
  }, []);

  list = data;
  console.log('DATADATA DATA IS:', data);

  return (
    <div className='cards'>
      {data.shows.data.map((show) => (
        <CardCollection key={show.id} show={show} />
      ))}

      {/*   {list.shows.data.map((item) => (
        <div> {item.name} </div>
      ))} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, { fetchTopShows })(HomePage);
