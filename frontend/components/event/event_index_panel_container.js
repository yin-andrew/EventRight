
// event index doesnt need anything from state?
// could get everything from props passed from index.
// consider deleting this container it doesnt need to

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createLike, fetchLikes, deleteLike } from "../../action/like_actions";
import EventPanel from "./event_index_panel";

// interact with the application state necessarily
// from ownprops receive all fetchedLikes. get likeId where event_id = event.id
const mSTP = (state, ownProps) => {
    // console.log("ownprop", ownProps);
    // console.log('state', state);
    return {
        currentUser: state.entities.users[state.session.id],
        liked: ownProps.liked
    }
};

const mDTP = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default withRouter(connect(mSTP, mDTP)(EventPanel));
