import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import Search from './search';

const mapStateToProps = state => ({
    spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);