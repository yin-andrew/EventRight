import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteEvent, fetchEvents, updateEvent } from "../../action/event_actions";
import OwnEventsIndex from "./own_events_index";
import OwnEventsItem from "./own_events_item";


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    events: Object.values(state.entities.events)
});


const mDTP = dispatch => ({
    fetchEvents: ()=>dispatch(fetchEvents()),
    deleteEvent: eventId=>dispatch(deleteEvent(eventId)),
    updateEvent: event=> dispatch(updateEvent(event))
});

export default withRouter(connect(mSTP, mDTP)(OwnEventsIndex));