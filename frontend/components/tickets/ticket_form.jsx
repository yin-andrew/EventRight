import React, { useState } from 'react';

function ticketForm(props) {

    const [ticket, setTicket] = useState(props.ticket);

    const event = props.events[parseInt(props.modal)]

    const handleSubmit = () => {
        props.createTicket(ticket)
        .then(()=> props.closeModal());     
    }

    return(
        <div className='tix-form-struct'>
            <div className='tix-form-left'>
                <div className='tix-form-title'>
                    <div className='tix-title-text'>
                        {event.title}
                    </div>
                </div>
                <div className='tix-form-body'>
                    <div className='tix-form-info'>
                        <div className='tix-form-date'>
                            {event.date}
                        </div>
                        <div className='get-tix'>
                            <div className='tix-form-price'>
                                General Admission Ticket: ${event.price}
                            </div>
                            <select className="tix-drop" value={ticket.quantity} id="qty-select" onChange={e=>setTicket({...ticket, quantity: parseInt(e.target.value)})}>
                                <option value="0" selected disabled>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className='liner'></div>
                    </div>
                </div>
                <div className='tix-form-submit'>
                    <div className='tix-submit-btn' onClick={handleSubmit}>
                        Checkout
                    </div>
                </div>

            </div>
            <div className='tix-form-right' >
                    
            </div>
        </div>
    );
}

export default ticketForm;