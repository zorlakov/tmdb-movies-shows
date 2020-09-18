import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchShowDetails } from '../../redux/actions/index';
import './show-details.styles.css';

const ShowDetailsPage = (props) => {
  const { fetchShowDetails } = props;
  const { show } = props;

  useEffect(() => {
    fetchShowDetails(props.location.state.item.id);
  }, []);

  return <div> HAHHAHAH </div>;
};

const mapStateToProps = (state) => {
  return {
    show: state,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchShowDetails })(ShowDetailsPage);
