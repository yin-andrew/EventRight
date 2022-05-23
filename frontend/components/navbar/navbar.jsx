import React from "react";
import { Link } from 'react-router-dom';
import EventIndexContainer from "../event/event_index_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHeart as farHeart, faUserCircle } from "@fortawesome/free-solid-svg-icons";


function Navbar(props) {

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

    if (props.currentUser) {
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
                            <div className="navbar-right-create">
                                <Link to='/create' className="navbar-link">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <div>
                                        Create an Event              
                                    </div>
                                </Link>
                            </div>
                            <div className="navbar-right-login">
                                <Link to='/likes' className="navbar-link">
                                    <FontAwesomeIcon icon = {farHeart} />
                                    <div>
                                        Likes
                                    </div>
                                </Link>
                            </div>
                            <div className="navbar-right-signup">
                                <Link to='/signup' className="navbar-user">
                                    <span><FontAwesomeIcon icon={faUserCircle}/></span>
                                    Welcome, {props.currentUser.fname}</Link>
                            </div>
                            <div className="navbar-right-logout">
                                <div onClick={loggingout}>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-container">
                    <img src={window.heroBanner} alt="" className="banner-photo"/>
                    <div className="banner-text">Find your people.</div>
                </div> */}

                {/* <div className="home-index-container">
                    <EventIndexContainer />
                    
                </div> */}

            </div>
        );
    } else {
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
                {/* <div className="banner-container">
                    <img src={window.heroBanner} alt="" className="banner-photo"/>
                    <div className="banner-text">Find your people.</div>
                </div> */}

                {/* <div className="home-index-container">
                    <EventIndexContainer />
                    
                </div> */}

            </div>
        );
    }
}

    // return(
    //     <div>
    //         <div className="navbar-page-struct">
    //             <div className="navbar-structure">
    //                 <div className="navbar-left">
    //                     <div className="eventbrite-navbar-link">
    //                         <Link to="/" className="eventbrite-logo-link">eventright</Link>
    //                     </div>
    //                     <div className="navbar-search">
    //                         <div className="search"> Search Events</div> 
    //                     </div>
    //                 </div>
    //                 <div className="navbar-right">
    //                     <div className="navbar-right-login">
    //                         <Link to='/login' className="navbar-link">Login</Link>
    //                     </div>
    //                     <div className="navbar-right-signup">
    //                         <Link to='/signup' className="navbar-link">SignUp</Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="banner-container">
    //             <img src={window.heroBanner} alt="" className="banner-photo"/>
    //             <div className="banner-text">Find your people.</div>
    //         </div>

    //         <div className="home-index-container">
    //             <EventIndexContainer />
                
    //         </div>

    //     </div>
    // );
// }

export default Navbar;