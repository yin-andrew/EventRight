import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function LoginForm(props) {
    const [user, setUser] = useState({email: '', password: ''});

    useEffect(()=> {props.clearErrors()}, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('ay');
        props.login(user).then(()=>props.history.push('/user/show'));
        //if errors dont redirect
    };

    const demo = e => {
        e.preventDefault();
        console.log('demo login');
        let demoUser = {
            email: 'test@mail.com',
            password: '123456'
        };
        props.login(demoUser).then(()=>props.history.push('/user/show'));
    }


    //test and handle errors from backend- review error codes.
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
                <div className="login-container">
                    <div className="login-header">
                        <div className="login-header-left">
                            <div className="eventbrite-login-link">
                                <Link to="/" className="eventbrite-logo-link">eventright</Link>
                            </div>
                            <h1 className="login-header-title">Log in</h1>
                        </div>
                        {/* <div className="login-header-signup-link">Sign up</div> */}
                    </div>
                    {handleErrors()}
                        {/* potentially ditch the div */}
                    <form onSubmit={handleSubmit} className='login-form'>
                        <div className="form-input-structure">
                            <label className="login-input-email-outer">Email address</label>
                            <input type="text" className="login-input-email-inner" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})}/>

                        </div>
                        <br />
                        <div className="form-input-structure">
                            <label className="login-input-email-outer">Password</label>
                            <input type="password" className="login-input-email-inner" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} />
                        </div>
                        <br />
                        <div className="login-btn-container">
                            <button className="login-btn">Log in</button>
                        </div>
                        <div className="space-maker"></div>
                        <div className="space-maker"></div>
                        <div className="login-linebreak">
                            <span className="linebreak-text">or</span>
                        </div>
                        <div className="space-maker"></div>
                    </form>
                    {/* <div className="space-maker"></div> */}
                    <div className="demo-login-btn-container">
                        <button className="demo-login-btn" onClick={demo}>Demo User</button>
                    </div>
                    <div className="space-maker"></div>
                    <div className="signup-redirect-container">
                       <Link to="/signup" className="signup-redirect">Sign up</Link> 
                    </div>

                </div>

            </div>
            <div className="login-split-right">
                <img src={window.loginPhoto} alt="" className="login-photo" />
            </div>
        </div>
    );

}

export default LoginForm;