import { connect } from "react-redux";
import { fetchEvents } from "../../action/event_actions";
import EventIndex from "./event_index";


const mSTP = (state, ownProps) => ({
    events: Object.values(state.entities.events)
});

const mDTP = dispatch => ({
    fetchEvents: ()=> dispatch(fetchEvents())
});

export default connect(mSTP, mDTP)(EventIndex);