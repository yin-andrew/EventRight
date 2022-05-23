import React from "react";
import { Link } from 'react-router-dom';

function EventPanel({liked, event}) {
// props.photoUrl, title, date, start_time, address, price
// fetch the dimensions of the panel to size it 
// may need to fetch the creator info so use fetchUser via container?

    const seeL = () => {
        console.log()
    }

    return (
        <div className="panel-container">
            <div className="panel-image-container">
                <Link to={`/events/${event.id}`}>
                    {/* <img src={event.photoUrl} className="test-img"alt="" /> */}
                </Link>
            
            </div>
            <div className="panel-wrappa">
                <div className="panel-body-wrapper">
                    <div className="panel-body">
                        <div className="event-panel-title">
                            <Link to={`/events/${event.id}`} className="panel-title-link">{event.title}</Link>
                        </div>
                        <div className="event-panel-date-time">{event.date}  {'\u2B24'} {event.start_time} </div>
                        <div className="event-panel-address">{event.address} </div>
                        <div className="event-panel-price"> Starts at ${event.price} </div>
                        <div className="event-panel-creator">
                            jeff
                            <br />
                            <br />
                            30m followers
                        </div>


                    </div>  
                    {liked ? 
                        <div className="event-panel-like">
                            <div className="panel-like">
                                Unlike
                            </div>
                        </div>
                    :
                        <div className="event-panel-like">
                            <div className="panel-like">
                                Like
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
    
}

export default EventPanel;
// need:
// Image, title, date, start_time, address, price