import { connect } from "react-redux";
import { createEvent, clearEventErrors } from "../../action/event_actions";
import { logout } from "../../action/session_actions";
import CreateEvent from "./create_event_form";

const mSTP = state => ({
    event: {title:'', description: '', date:'', start_time: '', end_time:'', address:'', price: 0, photoUrl:null},
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.events
});

const mDTP = dispatch => ({
    createEvent: event=> dispatch(createEvent(event)),
    logout: ()=> dispatch(logout),
    clearEventErrors: ()=>dispatch(clearEventErrors())
});

export default connect(mSTP, mDTP)(CreateEvent)

