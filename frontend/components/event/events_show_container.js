import { connect } from "react-redux";
import { fetchEvent } from "../../action/event_actions";
import { logout } from "../../action/session_actions";
import EventShow from "./event_show_item";

const mSTP = (state, ownProps) => {
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(EventShow);