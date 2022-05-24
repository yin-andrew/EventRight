import { connect } from "react-redux";
import { fetchEvents } from "../../action/event_actions";
import { fetchLikes } from "../../action/like_actions";
import EventIndex from "./event_index";


const mSTP = (state, ownProps) => ({
    events: Object.values(state.entities.events),
    likes: Object.values(state.entities.likes),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchEvents: ()=> dispatch(fetchEvents()),
    fetchLikes: () => dispatch(fetchLikes()),
});

export default connect(mSTP, mDTP)(EventIndex);