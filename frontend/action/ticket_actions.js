import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';
export const REMOVE_TICKET_ERRORS = 'REMOVE_TICKET_ERRORS';

const receiveTickets = tickets => ({
    type: RECEIVE_TICKETS,
    tickets
});

const receiveTicket = ticket => ({
    type: RECEIVE_TICKET,
    ticket
});

const removeTicket = ticketId => ({
    type: REMOVE_TICKET,
    ticketId
});

const receiveTicketErrors = errors => ({
    type: RECEIVE_TICKET_ERRORS,
    errors
});

export const clearTicketErrors = () => ({
    type: REMOVE_TICKET_ERRORS
})

export const fetchTickets = () => dispatch => (
    TicketApiUtil.fetchTickets()
        .then(tickets=>dispatch(receiveTickets(tickets)),
            errors=>dispatch(receiveTicketErrors(errors.responseJSON)))
);

export const fetchTicket = ticketId => dispatch => (
    TicketApiUtil.fetchTicket(ticketId)
        .then(ticket=>dispatch(receiveTicket(ticket)),
            errors => dispatch(receiveTicketErrors(errors.responseJSON)))
);

export const createTicket = ticket => dispatch => (
    TicketApiUtil.createTicket(ticket)
        .then(ticket=>dispatch(receiveTicket(ticket)), 
            errors => dispatch(receiveTicketErrors(errors.responseJSON)))
);

export const deleteTicket = ticketId => dispatch => (
    TicketApiUtil.deleteTicket(ticketId)
        .then(()=>dispatch(removeTicket(ticketId)), 
            errors => dispatch(receiveTicketErrors(errors.responseJSON)))
);



