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
                        <img src={window.heroBanner} className="show-photo-opaque" />
                    </div>
                    <div className="show-info">
                        <div className="show-top">
                            <div className="show-photo-basics">
                                <div className="show-photo-wrapper">
                                    {/* <img src={props.event.photoUrl} className="show-photo-top" />   */}
                                </div>
                                <div className="show-basics">

                                </div>

                            </div>
                            <div className="show-tickets">

                            </div>
                        </div>
                        <div className="event-show-body">
                            <div className="event-show-desc">

                            </div>
                            <div className="event-show-details">

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