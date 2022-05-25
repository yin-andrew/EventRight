import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../action/modal_actions";
import { createTicket } from "../../action/ticket_actions";
import ticketForm from "./ticket_form";

const mSTP = (state, ownProps) => {
    console.log('op', ownProps);
    return {
    currentUser: state.entities.users[state.session.id],
    ticket: {quantity: 0, event_id: parseInt(ownProps.modal), 
        user_id: state.session.id
    },
    events: state.entities.events
}};

const mDTP = dispatch => ({
    createTicket: ticket =>dispatch(createTicket(ticket)),
    closeModal: ()=>dispatch(closeModal)
});

export default withRouter(connect(mSTP, mDTP)(ticketForm));