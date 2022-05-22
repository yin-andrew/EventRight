export const fetchTickets = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tickets'
    })
);

export const fetchTicket = ticketId => (
    $.ajax({
        method: 'POST',
        url: `api/tickets/${ticketId}`,
        data: { ticketId }
    })
);

export const createTicket = ticket => (
    $.ajax ({
        method: 'POST',
        url: 'api/tickets/',
        data: {ticket}
    })
);

export const deleteTicket = ticketId => (
    $.ajax({
        method:'DELETE',
        url: `api/tickets/${ticketId}`
    })
);