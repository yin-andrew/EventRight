import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function LikesIndex(props) {

    //how to get the photo from the events that are there. 

    //render a ul of li items that are the 
    // <Link to={`/events/${props.like.event_id}`}>{}</Link>

    return(
        <div className="likes-index-container">
            <NavBarContainer />
            <div className="likes-index-struct">
                <div className="likes-index-body">
                    <div className="likes-body-header">
                        <div className="likes-header-text">
                            Likes
                        </div>
                    </div>

                    <div className="likes-index-content">
                    
                        <div className="likes-item-list">
                            <div className="likes-item-body">
                                <div className="likes-item-title">
                                    Title
                                </div>
                                <div className="likes-item-time">
                                    Fri, Jul 1, 3:00 PM
                                </div>
                                <div className="likes-item-address">
                                    Bill Graham Civic Center
                                </div>
                                <div className="likes-item-price">
                                    Starts at $5
                                </div>
                            </div>
                            <div className="likes-item-right">
                                <div className="likes-item-photo-container">
                                    <img src={window.testPhoto} alt="" className="likes-photo"/>
                                </div>
                                <div className="likes-item-status">
                                    UnLike
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default LikesIndex;