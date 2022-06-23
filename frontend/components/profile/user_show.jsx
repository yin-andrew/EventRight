import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import EventIndexContainer from "../event/event_index_container";
import Footer from "../footer/footer";

function userShow(props) {

    return (
        <div>
            <NavBarContainer />
            <div className="banner-container">
                <img src={window.heroBanner} alt="" className="banner-photo"/>
                <div className="banner-text">Find your people.</div>
            </div>

            <div className="home-index-container">
                <EventIndexContainer />
            </div>
            <Footer />
        </div>
    );
}

export default userShow;