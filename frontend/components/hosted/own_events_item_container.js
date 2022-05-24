import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteEvent, updateEvent } from "../../action/event_actions"
import OwnEventsItem from "./own_events_item";

const mSTP = (state, ownProps) => {
    console.log("ownprop", ownProps);
    return {
    currentUser: state.entities.users[state.session.id]
}};

const mDTP = dispatch => ({
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default withRouter(connect(mSTP, mDTP)(OwnEventsItem));