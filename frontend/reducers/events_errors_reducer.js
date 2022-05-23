import { RECEIVE_EVENT, RECIEVE_EVENT_ERRORS, REMOVE_EVENT_ERRORS } from "../action/event_actions";

const eventsErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECIEVE_EVENT_ERRORS:
            console.log("events-action",action);
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