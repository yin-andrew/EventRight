import React, { useEffect }from "react";
import { Link, useParams } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";


function EventShow(props) {
    
    // let { eventId } = useParams();

    // fetchEvent(this.props.match.params.listingid)
    useEffect(()=> {props.fetchEvent(props.match.params.eventId)}, []);

    // const loggingout = e => {
    //     e.preventDefault();
    //     console.log('logged out');
    //     /*
    //     running any kind of route to logging out changes current user
    //     which is a prop, use an if to return null to avoid error
    //     */
    //     // props.logout().then(()=> <Redirect to='/' />);
    //     props.logout().then(()=>props.history.push('/login'))
    // }

    const seeProps = () => {
        console.log('props', props);
        console.log('useParams', props.match.params.eventId);
    }

    if (!props.event) {
        // console.log('catch');
        return null;
    } else {
        return(
        <div>
            {/* {seeProps()} */}
            <NavbarContainer />
            <div className="event-show-struct">
                    <div className="show-photo-container">
                        <img src={props.event.photoUrl} className="show-photo-opaque" />
                        {/* <img src={window.testPhoto} className="show-photo-opaque" /> */}
                    </div>
                    <div className="show-info">
                        <div className="show-top">
                            <div className="show-photo-basics">
                                <div className="show-photo-wrapper">
                                    <img src={props.event.photoUrl} className="show-photo-top" />  
                                    {/* <img src={window.testPhoto} className="show-photo-top" /> */}
                                </div>
                                <div className="show-basics">
                                    <div className="basics-date">{props.event.date}</div>
                                    <div className="basics-title">{props.event.title}</div>
                                    <div className="basics-price">
                                        <div className="price-test">${props.event.price}</div>
                                    </div>

                                </div>

                            </div>
                        {props.currentUser ? 
                        <div className="show-tickets">
                            <button className="ticket-button" onClick={()=>props.openModal(`${props.event.id}`)}>Tickets</button>
                        </div>
                        :
                        <div className="show-tickets">
                            <button className="ticket-button" onClick={()=>props.history.push('/login')}>Tickets</button>
                        </div>
                        }
                        {/* <div className="show-tickets">
                            <button className="ticket-button">Tickets</button>
                        </div> */}
                        <div className="event-show-body">
                            <div className="event-show-desc">
                                <div className="show-desc-text">
                                    <div style={{fontWeight:'600', fontSize:'20px'}}>About this event</div>
                                    <br />
                                    <br />
                                    {props.event.description}
                                </div>
                                
                            </div>
                            <div className="event-show-details">
                                <div className="details-column">
                                    <div className="show-date-time">
                                        Date and time 
                                        <br />
                                        <br />
                                        {props.event.date}
                                        <br />
                                        {props.event.time}
                                    </div>
                                    <div className="show-location">
                                        Location
                                        <br />
                                        <br />
                                        {props.event.address}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    </div>
                </div>
            
        </div>
    );
    }
    
}

export default EventShow;


