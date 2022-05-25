import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteTicket, fetchTickets } from "../../action/ticket_actions";
import TicketsIndexItem from "./tickets_index_item";

const mSTP = (state, ownProps) => ({
    event: ownProps.event,
    ticket: ownProps.ticket
});

const mDTP = dispatch => ({
    deleteTicket: ticketId=> dispatch(deleteTicket(ticketId)),
    fetchTickets: ()=> dispatch(fetchTickets()),
});

export default withRouter(connect(mSTP, mDTP)(TicketsIndexItem));

