import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const CLEAR_LIKES = 'CLEAR_LIKES';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const clearLikes = () => ({
    type: CLEAR_LIKES
})

export const fetchLikes = () => dispatch => (
    LikeApiUtil.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes)))
);

export const fetchLike = likeId => dispatch => (
    LikeApiUtil.fetchLike(likeId)
        .then(like=>dispatch(receiveLike(like)))
);

export const createLike = like => dispatch => (
    LikeApiUtil.createLike(like)
        .then(like=>dispatch(receiveLike(like)))
);

export const deleteLike = likeId => dispatch => (
    LikeApiUtil.deleteLike(likeId)
        .then(()=>dispatch(removeLike(likeId)))
);


