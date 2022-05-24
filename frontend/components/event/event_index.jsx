import React, { useEffect, useState } from "react";
import EventPanel from "./event_index_panel";
import EventIndexPanelContainer from "./event_index_panel_container";

function EventIndex(props) {

    // const [user, setUser] = useState(props.currentUser.id);
    
    useEffect(()=> {props.fetchEvents()}, []);
    useEffect(()=>{
        if (props.currentUser) {
            props.fetchLikes()
        }
    }, []);

    
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
                            // eventindexpanelcontainer 
                                <EventIndexPanelContainer className="test-div" key={event.id} event = {event} liked={true} likes={props.likes} />
                            :
                                <EventIndexPanelContainer className="test-div" key={event.id} event = {event} liked={false} likes={props.likes} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventIndex;