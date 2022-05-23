import { connect } from "react-redux";
import { fetchEvent } from "../../action/event_actions";
import { fetchLike, fetchLikes } from "../../action/like_actions";
import LikesIndex from "./likes_index";

const mSTP = (state, ownProps) => ({
    likes: Object.values(state.entities.likes),
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    fetchEvent: (eventId)=> dispatch(fetchEvent(eventId)),
    fetchLikes: ()=> dispatch(fetchLikes()),
    fetchLike: likeId => dispatch(fetchLike(likeId))
});

export default connect(mSTP, mDTP)(LikesIndex);