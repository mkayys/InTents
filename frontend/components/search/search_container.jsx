import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import Search from './search';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = state => ({
    spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);