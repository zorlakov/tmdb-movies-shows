import React from 'react';
import './search-box.styles.css';
import { connect } from 'react-redux';
import {
  setShowSearchQuery,
  setMovieSearchQuery,
} from '../../redux/actions/index';
import { fetchShowSearch, fetchMovieSearch } from '../../redux/actions/index';

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (window.location.pathname === '/') {
        this.props.setShowSearchQuery(this.state.searchQuery);
        if (this.state.searchQuery.length > 2) {
          this.props.fetchShowSearch(this.props.showSearchQuery);
        }
      } else {
        this.props.setMovieSearchQuery(this.state.searchQuery);
        if (this.state.searchQuery.length > 2) {
          this.props.fetchMovieSearch(this.props.movieSearchQuery);
        }
      }
    }, 1000);
  }

  render() {
    let path = window.location.pathname;
    console.log('PATH JE', path);

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
    movieSearchQuery: state.movies.movieSearchQuery,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  setShowSearchQuery,
  setMovieSearchQuery,
  fetchShowSearch,
  fetchMovieSearch,
})(SearchBox);
