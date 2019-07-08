import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show';

const mapStateToProps = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId] || {}
});

const mapDispatchToProps = dispatch => ({
    fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);