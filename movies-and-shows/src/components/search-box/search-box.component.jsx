import React from 'react';
import './search-box.styles.css';
import { connect } from 'react-redux';
import { setShowSearchQuery } from '../../redux/actions/index';

/* const SearchBox = (props) => {
  let test = '';
  test = setShowSearchQuery('aaaa');

  console.log('TEST JE', test.data);
  return (
    <input
      className='search'
      type='search'
      placeholder={'Search by title'}
      onChange={setShowSearchQuery(event.target.value)}
    />
  );
}; */

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
    };
  }

  handleChange = (event) => {
    // console.log('EVENT TARGET VAL', event.target.value);
    this.setState({ searchQuery: event.target.value });
    // let query = this.state.searchQuery;
    //   this.props.setShowSearchQuery(this.state.searchQuery);
  };

  componentDidUpdate() {
    this.props.setShowSearchQuery(this.state.searchQuery);
  }

  /*   componentDidUpdate() {
    console.log('SACU POZVATI UPDATE');
    setShowSearchQuery('TEST PLIZ WORK');
    console.log('OVDJE TREBA BITI TEST PLW ORK', this.props.showSearchQuery);
  }
 */
  render() {
    return (
      <input
        type='search'
        placeholder={'Search by title'}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSearchQuery: state.shows.showSearchQuery,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  setShowSearchQuery,
})(SearchBox);
