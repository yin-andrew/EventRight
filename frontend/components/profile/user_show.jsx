import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import EventIndexContainer from "../event/event_index_container";


/*
show_page: have user information such as firstname lastname etc.
pre fill form with existing info and render changes as needed
tabs on the sidebar? 
*/

function userShow(props) {

    // const [user, setUser] = useState(props.currentUser);
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

    // if (!currentUser) {
    //     return null;
    // }

    return (
        <div>
            <NavBarContainer />
            {/* <div className="navbar-page-struct">
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
            </div> */}
            <div className="banner-container">
                <img src={window.heroBanner} alt="" className="banner-photo"/>
                <div className="banner-text">Find your people.</div>
            </div>

            <div className="home-index-container">
                <EventIndexContainer />
                
            </div>

            {/* <div>this is the user show page</div>
            <div>Welcome {props.currentUser.fname}</div>
            <Link to='/' onClick={loggingout}> Logout</Link>
            <button onClick={loggingout}>Logout</button> */}
        </div>
    );
}

export default userShow;