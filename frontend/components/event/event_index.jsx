import React, { useEffect } from "react";


function EventIndex(props) {
    
    useEffect(()=> {props.fetchEvents()}, []);

    return (
        <div className="events-index-container">
            <div className="index-header">Events in San Francisco</div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {props.events.map(event=> (
                            <div key={event.id} className="test-div">
                                {/* <img className="test-img" src={event.photoUrl} alt="" /> */}
                                <div>

                                    {event.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventIndex;