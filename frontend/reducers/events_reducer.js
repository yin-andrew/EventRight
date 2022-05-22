import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from "../action/event_actions";


const eventsReducer = (state ={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_EVENTS:
            return Object.assign({}, state, action.events);
        case RECEIVE_EVENT:
            return Object.assign({}, state, {[action.event.id]: action.event});
        case REMOVE_EVENT:
            let newState = Object.assign({}, state);
            delete newState[action.eventId];
            return newState;
        default:
            return state;
    }
}

export default eventsReducer;