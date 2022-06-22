import React, {useEffect} from "react";
import NavBarContainer from "../navbar/navbar_container";
import OwnEventsItem from "./own_events_item";
import OwnEventsItemContainer from "./own_events_item_container";

function OwnEventsIndex(props) {

    useEffect(()=>{props.fetchEvents()}, []);

    const userEvents = props.events.filter(event=>{
        return event.creator_id === props.currentUser.id;
    });

    if (!props.events) {
        return null;
    }

    return (
        <div className="likes-index-container">
            <NavBarContainer />
            <div className="likes-index-struct">
                <div className="likes-index-body">
                    <div className="likes-body-header">
                        <div className="likes-header-text">
                            Manage your events
                        </div>
                    </div>
                    
                    {userEvents.map((event, idx)=>(
                        <OwnEventsItemContainer key={event.id} event = {event}/>
                    ))}

                </div>

            </div>
        </div>
    );

}

export default OwnEventsIndex;