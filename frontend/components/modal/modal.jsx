import React from "react";
import { closeModal } from "../../action/modal_actions";
import { connect } from "react-redux";
import TicketFormContainer from "../tickets/ticket_form_container";

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e=>e.stopPropagation()}>
                <TicketFormContainer modal={modal}/>
            </div>
        </div>
    );
}

const mSTP = (state, ownProps) => ({
    modal:state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: ()=>dispatch(closeModal())  
});

export default connect(mSTP, mDTP)(Modal);