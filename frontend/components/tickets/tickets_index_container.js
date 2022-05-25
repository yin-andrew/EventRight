import { connect } from "react-redux";
import { fetchEvent, fetchEvents } from "../../action/event_actions";
import { fetchTickets } from "../../action/ticket_actions";
import TicketsIndex from "./tickets_index";


const mSTP = (state, ownProps) => {
    // console.log("ownprop", ownProps);
    console.log('state tickets', state.entities.tickets);
    return {
        currentUser: state.entities.users[state.session.id],
        events: Object.values(state.entities.events),
        tickets: Object.values (state.entities.tickets)
    }
};

const mDTP = dispatch => ({
    fetchTickets: ()=>dispatch(fetchTickets()),
    fetchEvents: ()=>dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId))
});

export default connect(mSTP, mDTP)(TicketsIndex);