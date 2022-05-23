import React, { useEffect } from "react";
import EventPanel from "./event_index_panel";
import EventIndexPanelContainer from "./event_index_panel_container";

function EventIndex(props) {
    
    useEffect(()=> {props.fetchEvents()}, []);
    useEffect(()=>{props.fetchLikes()}, []);

    let likerenjoyers;
    const setL = () => {
        likerenjoyers = props.likes.map(likes=> likes.event_id);
        console.log("fetching the likes", likerenjoyers);
        //likerenjoyers now contains the ids of liked events
    }

    if (!props.likes || !props.events) {
        return null;
    }

    return (
        <div className="events-index-container">
            {setL()}
            <div className="index-header">
                <div style={{width: '15%', height:'100%'}} className="dummy"></div>
                Popular in San Francisco
            </div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {props.events.map(event=> (
                            likerenjoyers.includes(event.id) ?
                                <EventPanel className="test-div" key={event.id} event = {event} liked={true}  />
                            :
                                <EventPanel className="test-div" key={event.id} event = {event} liked={false} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventIndex;