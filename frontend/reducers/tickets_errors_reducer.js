import { RECEIVE_TICKET, RECEIVE_TICKET_ERRORS, REMOVE_TICKET_ERRORS } from "../action/ticket_actions";

const ticketErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TICKET_ERRORS:
            return action.errors;
        case REMOVE_TICKET_ERRORS:
            return [];
        case RECEIVE_TICKET:
            return [];
        default:
            return state;
    }
}

export default ticketErrorsReducer;