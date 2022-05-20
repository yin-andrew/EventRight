import { connect } from "react-redux";
import { updateEvent } from "../../action/event_actions";
import EditEvent from "./edit_event_form";



const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    updateEvent: event=>dispatch(updateEvent(event)),
    logout: ()=>dispatch(logout())
});

export default connect(mSTP, mDTP)(EditEvent); 