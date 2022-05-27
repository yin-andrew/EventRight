import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function OwnEventsItem(props) {

    //accepts props.event, delete event, edit event

    return(
            <div className="likes-index-content">   
                <div className="likes-item-list">
                    <div className="likes-item-body">
                        <Link to={`/events/${props.event.id}`} className="likes-item-title">{props.event.title}</Link>
                        {/* <div className="likes-item-title">
                            {props.event.title}
                        </div> */}
                        <div className="likes-item-time">
                            {props.event.date}, {props.event.start_time}
                        </div>
                        <div className="likes-item-address">
                            {props.event.address}
                        </div>
                        <div className="likes-item-price">
                            Starts at ${props.event.price}
                        </div>
                        <div className="own-actions">
                            <div onClick={()=>props.history.push(`/edit/${props.event.id}`)} className="own-actions-btn">
                                <div>
                                    edit
                                </div>
                            </div>
                            <div onClick={()=>props.deleteEvent(props.event.id)} className="own-actions-btn">
                                <div>
                                    delete
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="likes-item-right">
                        <div className="likes-item-photo-container">
                            <Link to={`/events/${props.event.id}`}>
                                {/* <img src={window.testPhoto} alt="" className="likes-photo"/> */}
                            <img src={props.event.photoUrl} alt="" className="likes-photo"/>
                            </Link>
                        </div>
                        <div className="likes-item-status">
                            {/* <div onClick={()=>props.deleteLike(props.like.id)} className="index-item-unlike">
                                Remove
                            </div> */}
                            {/* <div onClick={()=>props.history.push(`/edit/${props.event.id}`)} className="index-item-unlike">
                                edit
                            </div>
                            <div onClick={()=>props.deleteEvent(props.event.id)} className="index-item-unlike">
                                delete event
                            </div> */}
                        </div>
                        
                    </div>
                    
                </div>
            </div> 
        );
}

export default OwnEventsItem;