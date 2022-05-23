import { connect } from "react-redux";
import LikesIndexItem from "./likes_index_item";
import { fetchEvent, fetchEvents } from "../../action/event_actions";
import { deleteLike } from "../../action/like_actions";

const mSTP = (state, ownProps) => {
    // console.log("action-state", state);
    // console.log("ownProps", ownProps);
    return {
        event: state.entities.events[ownProps.like.event_id],
        like: state.entities.likes[ownProps.like.id]
    }
};


const mDTP = dispatch => ({
    fetchEvents: ()=> dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    deleteLike: (likeId) =>dispatch(deleteLike(likeId))
});

export default connect(mSTP, mDTP)(LikesIndexItem);