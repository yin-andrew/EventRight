import { connect } from "react-redux";
import { fetchEvent } from "../../action/event_actions";
import EventShow from "./event_show_item";

const mSTP = (state, ownProps) => {
    return {
        event: state.entities.events[ownProps.match.params.eventId]
    }
};

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
});

export default connect(mSTP, mDTP)(EventShow);