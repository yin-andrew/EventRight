import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removelike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const fetchLikes = () => dispatch => (
    LikeApiUtil.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes)))
);

export const fetchLike = likeId => dispatch => (
    LikeApiUtil.fetchLike(likeId)
        .then(like=>dispatch(receiveLike(like)))
);

export const removeLike = likeId => dispatch => (
    LikeApiUtil.removeLike(likeId)
        .then(()=>dispatch(removeLike(likeId)))
);


