import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//gets passed in the like, the fetchEvent, 

function LikesIndexItem(props) {

    //fetches event from like.event_id
    useEffect(()=>{props.fetchEvents()}, [])
    // useEffect(()=>{console.log("props", props)}, [])
    useEffect(()=>{props.fetchEvent(props.like.event_id)},[]);

    const unLike = () => {
        console.log("props", props);
    }

    // const runIt =() => {
    //     console.log('props', props);
    //     console.log('useparams', likeId);
    // };

    if (!props.like || !props.event) {
        return null;
    } else {
        return(
            <div className="likes-index-content">
                {/* {unLike()}      */}
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
                    </div>
                    <div className="likes-item-right">
                        <div className="likes-item-photo-container">
                            <Link to={`/events/${props.event.id}`}>
                                {/* <img src={window.testPhoto} alt="" className="likes-photo"/> */}
                            <img src={props.event.photoUrl} alt="" className="likes-photo"/>
                            </Link>
                        </div>
                        <div className="likes-item-status">
                            <div onClick={()=>props.deleteLike(props.like.id)} className="index-item-unlike">
                                <div>
                                    Remove
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> 
        );
    }
    

}

export default LikesIndexItem;