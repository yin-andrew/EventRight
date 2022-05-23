
// event index doesnt need anything from state?
// could get everything from props passed from index.
// consider deleting this container it doesnt need to

import { connect } from "react-redux";
import { createLike, fetchLikes } from "../../action/like_actions";
import EventPanel from "./event_index_panel";

// interact with the application state necessarily
const mSTP = (state, ownProps) => ({
    likes: state.entities.likes,
    currentUser: state.entities.users[state.session.id] 
});

const mDTP = dispatch => ({
    fetchLikes: ()=> dispatch(fetchLikes()),
    createLike: like=>dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default connect(mSTP, mDTP)(EventPanel);
