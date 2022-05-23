import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECIEVE_EVENT_ERRORS = 'RECIEVE_EVENT_ERRORS';
export const REMOVE_EVENT_ERRORS = 'REMOVE_EVENT_ERRORS';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
});

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
});

const receiveErrors = errors => ({
    type: RECIEVE_EVENT_ERRORS,
    errors
});

export const clearEventErrors = () => ({
    type: REMOVE_EVENT_ERRORS
})

export const fetchEvents = () => dispatch => (
    EventApiUtil.fetchEvents()
        .then(events=> dispatch(receiveEvents(events)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchEvent = eventId => dispatch => (
    EventApiUtil.fetchEvent(eventId)
        .then(event=>dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createEvent = event => dispatch => (
    EventApiUtil.createEvent(event)
        .then(event=>dispatch(receiveEvent(event)),
            errors=>dispatch(receiveErrors(errors.responseJSON)))
);

export const updateEvent = event => dispatch => (
    EventApiUtil.updateEvent(event)
        .then(event=>dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteEvent = eventId => dispatch => (
    EventApiUtil.deleteEvent(eventId)
        .then(()=> dispatch(removeEvent(eventId)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);


