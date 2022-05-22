import { connect } from "react-redux";
import { fetchLike, fetchLikes } from "../../action/like_actions";

const mSTP = (state, ownProps) => ({
    like: state.entities.events[ownProps.match.params.likeId],
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchLikes: ()=> dispatch(fetchLikes()),
    fetchLike: likeId => dispatch(fetchLike(likeId))
});

export default connect(mSTP, mDTP)()