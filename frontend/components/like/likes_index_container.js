import { connect } from "react-redux";
import { fetchEvent, fetchEvents } from "../../action/event_actions";
import { fetchLike, fetchLikes } from "../../action/like_actions";
import LikesIndex from "./likes_index";

const mSTP = (state, ownProps) => {
    // console.log('index-state', state);
    // console.log('index-ownProp', ownProps);
    return {
    likes: Object.values(state.entities.likes),
    currentUser: state.entities.users[state.session.id],
    events: state.entities.events
}};

const mDTP = dispatch => ({
    fetchEvents: ()=>dispatch(fetchEvents()),
    fetchLikes: ()=> dispatch(fetchLikes()),
    fetchLike: likeId => dispatch(fetchLike(likeId))
});

export default connect(mSTP, mDTP)(LikesIndex);