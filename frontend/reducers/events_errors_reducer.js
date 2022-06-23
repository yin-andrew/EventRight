import { RECEIVE_EVENT, RECIEVE_EVENT_ERRORS, REMOVE_EVENT_ERRORS } from "../action/event_actions";

const eventsErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    console.log("action", action);
    switch(action.type) {
        case RECIEVE_EVENT_ERRORS:
            if (action.errors === undefined) {
                return ['Please fill in all fields'];
            }
            return action.errors;
        case REMOVE_EVENT_ERRORS:
            return [];
        case RECEIVE_EVENT:
            return [];
        default: 
            return state;
    }
}

export default eventsErrorsReducer;