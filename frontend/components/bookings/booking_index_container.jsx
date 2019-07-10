import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = state => ({
    bookings: Object.values(state.entities.bookings)
});

const mapDispatchToProps = dispatch => ({
    fetchBookings: () => dispatch(fetchBookings())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);

