import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, CLEAR_LIKES } from "../action/like_actions";

const likesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKES:
            return Object.assign({}, state, action.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case CLEAR_LIKES:
            return {};
        case REMOVE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;