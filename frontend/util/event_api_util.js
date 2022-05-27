
export const fetchEvents = () => (
    $.ajax({
        method: 'GET',
        url: '/api/events/'
    })
);

export const fetchEvent = eventId => (
    $.ajax({
        method: 'GET',
        url: `api/events/${eventId}`
    })
);

export const createEvent = event => (
    $.ajax({
        method: 'POST',
        url: '/api/events',
        data: event ,
        processData: false,
        contentType: false
    })
);

export const updateEvent = event => (
    $.ajax({
        method: 'PATCH',
        url: `api/events/${event.id}`,
        data: event,
        processData: false,
        contentType: false
    })
);

export const deleteEvent = eventId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/events/${eventId}`
    })
);

export const searchEvents = query => (
    $.ajax({
        method: 'GET',
        url:'api/events/search',
        data: { query }
    })
);

