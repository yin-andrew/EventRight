import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LikesIndexItemContainer from "./likes_index_item_container";

function LikesIndex(props) {

    //how to get the photo from the events that are there. 
    //index should now only fetch liked events by the current user

    //render a ul of li items that are the 
    // <Link to={`/events/${props.like.event_id}`}>{}</Link>

    const printprops = () => {
        console.log("yepper stepper", props);
    }

    
    useEffect(()=>{props.fetchLikes()}, []);
    // useEffect(()=>{console.log("got likes", props)},[]);
    useEffect(()=>{props.fetchEvents()}, []);
    // useEffect(()=>{console.log("gotevents", props)},[]);

    if (!props.likes){
        return null;
    }

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
                    
                    {props.likes ? props.likes.map((like, idx)=> (
                        <LikesIndexItemContainer like={like} key={idx} events={props.events}/>
                    ))
                    :
                    <div></div>
                    }

                </div>

            </div>
        </div>
    );
}

export default LikesIndex;


{/* <div className="likes-index-content">
                    
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
                    </div> */}