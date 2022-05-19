import React, { useEffect } from "react";
import EventPanel from "./event_index_panel";

function EventIndex(props) {
    
    useEffect(()=> {props.fetchEvents()}, []);

    return (
        <div className="events-index-container">
            <div className="index-header">
                <div style={{width: '15%', height:'100%'}} className="dummy"></div>
                Popular in San Francisco
            </div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {props.events.map(event=> (
                            <EventPanel className="test-div" key={event.id} event = {event}  />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventIndex;