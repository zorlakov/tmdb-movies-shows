import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchShowDetails } from '../../redux/actions/index';
import Details from '../../components/details/details.component';
import './show-details.styles.css';

const ShowDetailsPage = (props) => {
  const { fetchShowDetails } = props;

  useEffect(() => {
    if (props.location.state.item.name) {
      fetchShowDetails(props.location.state.item.id);
    } else {
      // fetch movies ovdje
    }
  }, []);

  console.log('SELECTED IS', props.location.state.item);

  return <Details item={props.location.state.item} />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchShowDetails })(ShowDetailsPage);
