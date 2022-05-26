import React, { useEffect } from "react";
import NavbarContainer from "../navbar/navbar_container";
import EventIndexPanelContainer from "../event/event_index_panel_container";

function SearchResults(props) {

    useEffect(()=> {
        
        return ()=> {
            props.clearEventErrors();
            props.fetchEvents();
        }
    }, []);

    let likerenjoyers;
    const setL = () => {
        likerenjoyers = props.likes.map(likes=> likes.event_id);
        // console.log("fetching the likes", likerenjoyers);
        //likerenjoyers now contains the ids of liked events
    }

    const handleErrors = () => {
        if (props.errors.length ===0) {
            return null;
        } else {
            console.log("props.errors", props.errors);
            window.scrollTo(0,0);
            return <ul className="login-errors-list">{props.errors.map((error,idx)=>(<li key={idx }>{error}</li>))}</ul>
        } 
    }

    // if (!props.events) {
    //     return null;
    // }

    return (
        <div>
            <NavbarContainer />
            <div className="events-index-container">
            {setL()}
            <div className="index-header">
                {/* <div style={{width: '15%', height:'100%'}} className="dummy">

                </div> */}
                Search Results
            </div>
            {handleErrors()}
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
        </div>
    );
    
}

export default SearchResults;