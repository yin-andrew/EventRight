import React, { useEffect }from "react";
import { Link, useParams } from "react-router-dom";


function EventShow(props) {
    
    // let { eventId } = useParams();

    // useEffect(()=> {props.fetchEvent(props.event.id)}, []);

    const loggingout = e => {
        e.preventDefault();
        console.log('logged out');
        /*
        running any kind of route to logging out changes current user
        which is a prop, use an if to return null to avoid error
        */
        // props.logout().then(()=> <Redirect to='/' />);
        props.logout().then(()=>props.history.push('/login'))
    }

    const seeProps = () => {
        console.log('props', props);
    }

    if (!props.currentUser) {
        return(
            <div>
                <div className="navbar-page-struct">
                    <div className="navbar-structure">
                        <div className="navbar-left">
                            <div className="eventbrite-navbar-link">
                                <Link to="/" className="eventbrite-logo-link">eventright</Link>
                            </div>
                            <div className="navbar-search">
                                <div className="search"> Search Events</div> 
                            </div>
                        </div>
                        <div className="navbar-right">
                            <div className="navbar-right-login">
                                <Link to='/login' className="navbar-link">Login</Link>
                            </div>
                            <div className="navbar-right-signup">
                                <Link to='/signup' className="navbar-link">SignUp</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="event-show-struct">
                    {/* props.event */}
                    <div className="show-photo-container">
                        <img src={window.testPhoto} className="show-photo-opaque" />
                    </div>
                    <div className="show-info">
                        <div className="show-top">
                            <div className="show-photo-basics">
                                <div className="show-photo-wrapper">
                                    <img src={window.testPhoto} className="show-photo-top" />  
                                </div>
                                <div className="show-basics">
                                    <div className="basics-date">Sat, May 21, 2022</div>
                                    <div className="basics-title">Robbie's Kickback</div>
                                    <div className="basics-price">
                                        <div className="price-test">$20 - $30</div>
                                    </div>

                                </div>

                            </div>
                        <div className="show-tickets">
                            <button className="ticket-button">Tickets</button>
                        </div>
                        <div className="event-show-body">
                            <div className="event-show-desc">
                                <div className="show-desc-text">
                                    <div style={{fontWeight:'600', fontSize:'20px'}}>About this event</div>
                                    <br />
                                    <br />
                                     "The World Championships for Dog Surfing take place on the Northern California coast - 
    where the concept for the sport originated - bringing together dog surfing talent for charity. Dog 
    surfers are invited to bring home the gold. During the event there will be a number of activities 
    including the surf competition, partner tents and activities, and more. Entrants also receive a VIP 
    Gift Bag, with items such as dog treats, snacks, and more. The Norcal World Dog Surfing event celebrates 
    the best in the sport, but this event is not only for sport and for fun. It's also for great causes, 
    like Rocket Dog the Peninsula Humane Society. Help local charities raise money by having friends and family 
    sponsor your or your team using our partners, Eventbrite and Crowdrise. $5 of each surfing dog registration 
    is donated to either of the associate charities after the event has been completed. We also encourage entrants 
    to fundraise for these dog non-profits as well.", 
                                </div>
                                
                            </div>
                            <div className="event-show-details">
                                <div className="details-column">
                                    <div className="show-date-time">
                                        Date and time 
                                        <br />
                                        <br />
                                        Sat, May 21, 2022
                                        <br />
                                        1:00PM - 7:00PM PDT
                                    </div>
                                    <div className="show-location">
                                        Location
                                        <br />
                                        <br />
                                        341 13th St
                                        <br />
                                        Entrance to Outdoor Space 
                                        <br />
                                        Oakland, CA, 94612
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div>
                {/* <div>{props.event.title}</div> */}
                <div>testsuite</div>
                <div className="navbar-page-struct">
                    <div className="navbar-structure">
                        <div className="navbar-left">
                            <div className="eventbrite-navbar-link">
                                <Link to="/" className="eventbrite-logo-link">eventright</Link>
                            </div>
                            <div className="navbar-search">
                                <div className="search"> Search Events</div> 
                            </div>
                        </div>
                        <div className="navbar-right">
                            <div className="navbar-right-login">
                                <Link to='/login' className="navbar-link">Likes</Link>
                            </div>
                            <div className="navbar-right-signup">
                                <Link to='/signup' className="navbar-link">Welcome, {props.currentUser.fname}</Link>
                            </div>
                            <div className="navbar-right-logout">
                                <div onClick={loggingout}>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>

                

                
            </div>
    ); 
    }
    
}

export default EventShow;