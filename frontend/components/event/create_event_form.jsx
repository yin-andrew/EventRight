import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";


function CreateEvent(props) {
    const [event, setEvent] = useState({title:'', description: '', date:'', start_time: '', end_time:'', address:'', price: 0, photoUrl:''});

    //events creation errors handling??

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

    const handleSubmit = e => {
        console.log('event', event);
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[title]', event.title);
        formData.append('event[description]', event.description);
        formData.append('event[date]', event.date);
        formData.append('event[start_time]', event.start_time);
        formData.append('event[end_time]', event.end_time);
        formData.append('event[creator_id]', props.currentUser.id);
        formData.append('event[price]', event.price);
        formData.append('event[address]', event.address);
        formData.append('event[photo]', event.photoUrl);

        console.log('form:', formData);
        props.createEvent(formData).then(()=>props.history.push('/'));
        //push to home and render new event in the home page
    };

    // const inputsHandler = (e) => {
    //     const val = e.target.value
    //     setEvent(event=> ({
    //         ...event,
    //         title: val
    //     }));
    //     console.log(props)
    // }

    //
                        {/* value={event.title} onChange={(e)=>setEvent({...event, title: e.target.value})} */}

    // if (!props.currentUser) {
    //     return null;
    // }

    return (
        <div>
            <NavbarContainer />
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
                            <Link to='/signup' className="navbar-link">Welcome</Link>
                        </div>
                        <div className="navbar-right-logout">
                            <div onClick={loggingout}>Logout</div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="create-form-container">
                <form onSubmit={handleSubmit} className="form-struct">
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">Title</label>
                        <input type="text" className="login-input-email-inner" value={event.title} onChange={(e)=>setEvent({...event, title: e.target.value})}/>
                    </div>
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">description</label>
                        <input type="text" className="login-input-email-inner" value={event.description} onChange={(e)=>setEvent({...event, description: e.target.value})}/>
                    </div>
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">date</label>
                        <input type="text" className="login-input-email-inner" value={event.date} onChange={(e)=>setEvent({...event, date: e.target.value})}/>
                    </div>
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">start time</label>
                        <input type="text" className="login-input-email-inner" value={event.start_time} onChange={(e)=>setEvent({...event, start_time: e.target.value})}/>
                    </div>
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">end time</label>
                        <input type="text" className="login-input-email-inner" value={event.end_time} onChange={(e)=>setEvent({...event, end_time: e.target.value})}/>
                    </div>
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">address</label>
                        <input type="text" className="login-input-email-inner" value={event.address} onChange={(e)=>setEvent({...event, address: e.target.value})}/>
                    </div>
                    <div className="form-input-structure">
                        <label className="login-input-email-outer">price</label>
                        <input type="number" className="login-input-email-inner" value={event.price} onChange={(e)=>setEvent({...event, price: e.target.value})}/>
                    </div>

                    <div className="form-input-structure">
                        <label className="login-input-email-outer">photo</label>
                        <input type="file" className="login-input-email-inner" onChange={e=> setEvent({...event, photoUrl: e.target.files[0]})}/>
                    </div>
                    <button>Create Event</button>
                </form>

            </div>

        </div>
    );

}

export default CreateEvent;