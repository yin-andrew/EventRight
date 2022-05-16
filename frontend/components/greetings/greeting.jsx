import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function Greeting(props) {

    const loggingout = e => {
        e.preventDefault();
        console.log('logged out');
        props.logout().then(()=> <Redirect to="/"/>)
    }

    return(
        <div>
            {props.currentUser ?
                <div>
                    <div>Welcome {props.currentUser.fname}</div>
                    <button onClick={loggingout}>Logout</button>
                </div>    
            :
                <div>
                    <div>
                        <Link to='/signup'>SignUp</Link>
                        <br />
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default Greeting;