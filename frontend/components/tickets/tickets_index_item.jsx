import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function TicketsIndexItem(props) {


    useEffect(()=>{props.fetchTickets()}, []);
    // useEffect(()=>{props.fetchEvents()}, [])

    if (!props.ticket) {
        return null;
    }

    const seep = () => {
        console.log("props", props);
    }

    return (
        <div className="panel-container">
            {seep()}
            <div className="panel-image-container">
                <Link to={`/events/${props.event[0].id}`}>
                    {/* <img src={props.event[0].photoUrl} className="test-img"alt="" /> */}
                </Link>
            
            </div>
            <div className="panel-wrappa">
                <div className="panel-body-wrapper">
                    <div className="panel-body">
                        <div className="event-panel-title">
                            <Link to={`/events/${props.event[0].id}`} className="panel-title-link">{props.event[0].title}</Link>
                        </div>
                        <div className="event-panel-date-time">{props.event[0].date}  {'\u2B24'} {props.event[0].start_time} </div>
                        <div className="event-panel-address">{props.event[0].address} </div>
                        <div className="event-panel-price"> Starts at ${props.event[0].price} </div>
                        <div className="event-panel-creator">
                            jeff
                            <br />
                            <br />
                            30m followers
                        </div>
                        <div className="tix-qty">
                            <div className="qty-disp">
                                Qty: {props.ticket.quantity}
                            </div>
                            <div className="tix-cancel" onClick={()=>props.deleteTicket(props.ticket.id)}>
                                Cancel Order
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        </div>
    );

}

export default TicketsIndexItem;