import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearEventErrors, clearEvents, fetchEvents } from "../../action/event_actions";
import { fetchLikes } from "../../action/like_actions";
import SearchResults from "./search_results";

const mSTP = (state, ownProps) => ({
    events: Object.values(state.entities.events),
    currentUser: state.entities.users[state.session.id],
    likes: Object.values(state.entities.likes),
    errors: state.errors.events
});


const mDTP = dispatch => ({
    fetchEvents: ()=>dispatch(fetchEvents()),
    fetchLikes: ()=>dispatch(fetchLikes()),
    clearEvents: ()=>dispatch(clearEvents()),
    clearEventErrors: ()=> dispatch(clearEventErrors())
});

export default withRouter(connect(mSTP, mDTP)(SearchResults));