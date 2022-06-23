import React from "react";
import { Link } from 'react-router-dom';

function EventPanel(props) {
// props.photoUrl, title, date, start_time, address, price
// may need to fetch the creator info so use fetchUser via container?

    const seeL = () => {
        console.log("curlike", bigLike);
    }

    const bigLike = props.likes.filter(like=>(like.event_id === props.event.id))[0];


    return (
        <div className="panel-container">
            {/* {seeL()} */}
            <div className="panel-image-container">
                <Link to={`/events/${props.event.id}`}>
                    <img src={window.testPhoto} className="show-photo-top" />
                    {/* <img src={props.event.photoUrl} className="test-img"alt="" /> */}
                </Link>
            
            </div>
            <div className="panel-wrappa">
                <div className="panel-body-wrapper">
                    <div className="panel-body">
                        <div className="event-panel-title">
                            <Link to={`/events/${props.event.id}`} className="panel-title-link">{props.event.title}</Link>
                        </div>
                        <div className="event-panel-date-time">{props.event.date}  {'\u2B24'} {props.event.start_time} </div>
                        <div className="event-panel-address">{props.event.address} </div>
                        <div className="event-panel-price"> Starts at ${props.event.price} </div>
                        {/* <div className="event-panel-creator">
                            jeff
                        </div> */}


                    </div> 
                    {props.currentUser ? 
                        props.liked ? 
                        <div className="event-panel-like">
                            <div className="panel-like" onClick={()=> props.deleteLike(bigLike.id)}>
                                Unlike
                            </div>
                        </div>
                        :
                        <div className="event-panel-like">
                            <div className="panel-like" onClick={()=>props.createLike({user_id: props.currentUser.id, event_id: props.event.id})}>
                                Like
                            </div>
                        </div>
                    :  
                    <div className="event-panel-like">
                        <div className="panel-like" onClick={()=>props.history.push('/login')}>
                            Like
                        </div>
                    </div>} 
                    {/* {props.liked ? 
                        <div className="event-panel-like">
                            <div className="panel-like" onClick={()=> props.deleteLike(bigLike.id)}>
                                Unlike
                            </div>
                        </div>
                    :
                        <div className="event-panel-like">
                            <div className="panel-like" onClick={()=>props.createLike({user_id: props.currentUser.id, event_id: props.event.id})}>
                                Like
                            </div>
                        </div>
                    } */}
                </div>

            </div>
        </div>
    );
    
}

export default EventPanel;
// need:
// Image, title, date, start_time, address, price