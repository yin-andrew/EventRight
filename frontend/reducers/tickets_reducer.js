import { RECEIVE_TICKET, RECEIVE_TICKETS, REMOVE_TICKET } from "../action/ticket_actions";

const ticketsReducer = (state = {}, action) => { 
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TICKETS:
            return Object.assign({}, state, action.tickets);
        case RECEIVE_TICKET:
            return Object.assign({}, state, {[action.ticket.id]: action.ticket});
        case REMOVE_TICKET:
            let newState = Object.assign({}, state);
            delete newState[action.ticketId];
            return newState;
        default:
            return state;
    }
}

export default ticketsReducer;