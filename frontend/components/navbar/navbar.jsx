import React from "react";
import { Link } from 'react-router-dom';

function Navbar(props) {


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
            <div className="banner-container">
                <img src={window.heroBanner} alt="" className="banner-photo"/>
                <div className="banner-text">Find your people.</div>
            </div>


        </div>
    );
}

export default Navbar;