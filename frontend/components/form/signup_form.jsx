import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function SignupForm(props) {
    const [user, setUser] = useState({email: '', password: '', fname: '', lname:'', username:''});

    useEffect(()=> {props.clearErrors()}, [])

    const handleSubmit = e => {
        e.preventDefault();
        props.signup(user).then(()=>props.history.push('/user/show'));
    };

    const handleErrors = () => {
        if (props.errors.length ===0) {
            return null;
        }
        if (props.errors) {
            return <ul className="login-errors-list">{props.errors.map((error,idx)=>(<li key={idx}>{error}</li>))}</ul>
        } 
    }

    // const handleChange = field => {
    //     return e=>setUser({[field]: e.currentTarget.value});
    // }

    return (
        
        <div className="login-structure">
            <div className="login-split-left">
                <div className="signup-container">
                    <div className="signup-header">
                        <div className="login-header-left">
                            <div className="eventbrite-login-link">
                                <Link to="/" className="eventbrite-logo-link">eventright</Link>
                            </div>
                            <h1 className="signup-header-title">Create an account</h1>
                        </div>
                    </div>
                    {handleErrors()}
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="form-input-structure">
                            <label className="login-input-email-outer">Email</label>
                            <input type="text" className="login-input-email-inner" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})}/>
                        </div>
                        <br />
                        <div className="form-input-structure">
                            <label className="login-input-email-outer">Username</label>
                            <input type="text" className="login-input-email-inner" value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})}/>
                        </div>
                        <br />

                        <div className="fname-lname-container">
                            <div className="form-input-structure">
                                <label className="login-input-email-outer">First Name</label>
                                <input type="text" className="login-input-email-inner" value={user.fname} onChange={(e)=>setUser({...user, fname: e.target.value})}/>
                            </div>
                            <div className="form-input-structure">
                                <label className="login-input-email-outer">Last Name</label>
                                <input type="text" className="login-input-email-inner" value={user.lname} onChange={(e)=>setUser({...user, lname: e.target.value})}/>
                            </div>

                        </div>
                        <br />
                        <div className="form-input-structure">
                            <label className="login-input-email-outer">Password</label>
                            <input type="password" className="login-input-email-inner" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} />
                        </div>
                        <br />
                        <div className="signup-line-valid">
                            Your password must be at least 6 characters
                        </div>
                        <br />
                        <div className="signup-btn-container">
                            <button className="signup-btn">Sign up</button>
                        </div>
                    </form>
                    <br />
                    <br />

                    <div className="login-redirect-container">
                        <Link to="/login" className="login-redirect">Log in</Link>    
                    </div>

                </div>
            </div>
            <div className="login-split-right">
                <img src={window.signupPhoto} alt="" className="signup-photo" />
            </div>
        </div>
    );

}

export default SignupForm;