import React from "react";
import { Link, Redirect } from "react-router-dom";


/*
show_page: have user information such as firstname lastname etc.
pre fill form with existing info and render changes as needed
tabs on the sidebar? 
*/

function userShow(props) {

    const loggingout = e => {
        e.preventDefault();
        console.log('logged out');
        /*
        running any kind of route to logging out changes current user
        which is a prop, use an if to return null to avoid error
        */
        // props.logout().then(()=> <Redirect to='/' />);
        props.logout().then(()=>props.history.push('/'))
    }

    return (
        <div>
            <div>this is the user show page</div>
            <div>Welcome {props.currentUser.fname}</div>
            {/* <Link to='/' onClick={loggingout}> Logout</Link> */}
            <button onClick={loggingout}>Logout</button>
        </div>
    );
}

export default userShow;