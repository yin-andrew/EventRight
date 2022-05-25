import React, { useEffect } from "react";
import NavBarContainer from "../navbar/navbar_container";
import TicketsIndexItem from "./tickets_index_item";
import TicketsIndexItemContainer from "./tickets_index_item_container";

function TicketsIndex(props) {

    useEffect(()=>{props.fetchTickets()}, []);
    useEffect(()=>{props.fetchEvents()}, []);

    if (!props.tickets) {
        return null;
    }

    let usersTix;

    const getTix = () => {
        usersTix = props.tickets.filter(tickets=> tickets.user_id === props.currentUser.id)
    }

    return (
        <div>
            {getTix()}
            <NavBarContainer />
            <div className="events-index-container">
            <div className="tickets-header">
                {/* <div style={{width: '15%', height:'100%'}} className="dummy"></div> */}
                Your Tickets
            </div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {usersTix.map(tix=> (
                            <TicketsIndexItemContainer ticket={tix} key={tix.id} event ={props.events.filter(event=>event.id===tix.event_id)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TicketsIndex;