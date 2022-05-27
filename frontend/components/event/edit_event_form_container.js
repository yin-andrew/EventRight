import { connect } from "react-redux";
import { clearEventErrors, fetchEvent, updateEvent } from "../../action/event_actions";
import EditEvent from "./edit_event_form";



const mSTP = (state, ownProps) => {
    // console.log("state", state);
    // console.log("ownProps", ownProps);
    return{
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.events
}};

const mDTP = dispatch => ({
    clearEventErrors: ()=>dispatch(clearEventErrors()),
    fetchEvent: eventId=> dispatch(fetchEvent(eventId)),
    updateEvent: event=>dispatch(updateEvent(event)),
    logout: ()=>dispatch(logout())
});

export default connect(mSTP, mDTP)(EditEvent); 