import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import SpotIndex from './spot_index';

const mapStateToProps = state => ({
    spots: Object.values(state.entities.spots),
    loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex);