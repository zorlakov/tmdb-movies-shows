import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import './homepage.styles.css';
import Loader from 'react-loader-spinner';

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
  const { data, loading } = props;
  const { fetchTopShows } = props;
  let list = [];
  useEffect(() => {
    // const { dispatch } = this.props;
    fetchTopShows();
  }, []);

  list = data;
  console.log('DATADATA DATA IS:', data);

  console.log('PROPS IS:', props);
  return (
    <div className='cards'>
      {loading ? (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={2000}
        />
      ) : (
        <CardCollection shows={list.shows} />
      )}

      {/*  <CardCollection shows={list.shows} /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchTopShows })(HomePage);

{
  /*   {list.shows.data.map((item) => (
        <div>
          {item.name} {item.id}
        </div>
      ))} */
}
