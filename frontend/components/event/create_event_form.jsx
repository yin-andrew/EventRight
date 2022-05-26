import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";


function CreateEvent(props) {
    const [event, setEvent] = useState({title:'', description: '', date:'', start_time: '', end_time:'', address:'', price: 0, photoUrl:''});

    //events creation errors handling??
    useEffect(()=>{props.clearEventErrors()},[]);
    // useEffect(()=>window.scrollTo(0,0), props.errors);

    // useEffect(()=> {
    //     const clearingErrors = async ()=> {
    //         await props.clearEventErrors();
    //     }
    //     clearingErrors();
    // }, []);

    const handleErrors = () => {
        if (props.errors.length ===0) {
            return null;
        } else {
            window.scrollTo(0,0);
            return <ul className="login-errors-list">{props.errors.map((error,idx)=>(<li key={idx}>{error}</li>))}</ul>
        } 
    }

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

        // console.log('form:', formData);
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

    // if (props.errors) {
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

            {handleErrors()}

            <div className="create-form-container">
                <div className="create-form-header">
                    <div className="create-header-text">
                        Create Your Event
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form-struct">

                    <div className="create-info-group">
                        <div className="create-section-header">
                            <div>Event Title</div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Name your event and tell event-goers why they should come. Add details
                                that highlight what makes it unique.

                            </div>
                        </div>

                        <div className="form-create-structure">
                            {/* <div className="create-field-struct">
                                <label className="input-create-outer">Event Title</label>
                                <input type="text" className="input-create-inner" placeholder="Be clear and descriptive" value={event.title} onChange={(e)=>setEvent({...event, title: e.target.value})}/>
                            </div> */}


                            <div className="teststruct">
                                <input type="text" className="testput" placeholder="Be clear and descriptive" value={event.title} onChange={(e)=>setEvent({...event, title: e.target.value})}/>
                                <div className="testlabel">
                                    Event Title
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="create-info-group">
                        <div className="create-section-header">
                            <div>Location</div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Help people in the area discover your event and let attendees know where to show up.
                            </div>
                        </div>

                        <div className="form-create-structure">
                            <div className="teststruct">
                                <input type="text" className="testput" placeholder="Input your venue or address" value={event.address} onChange={(e)=>setEvent({...event, address: e.target.value})}/>
                                <div className="testlabel">Venue Location</div>
                            </div>
                        </div>
                    </div>

                    <div className="create-desc-group">
                        <div className="create-section-header">
                            <div>Date and Time</div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Tell event-goers when your event starts and ends so they can make plans to attend.
                            </div>
                        </div>

                        <div className="form-create-structure">
                            <div className="teststruct">
                                <input type="text" className="testput" placeholder="Enter a date like 'Fri, May 2, 2022'" value={event.date} onChange={(e)=>setEvent({...event, date: e.target.value})} />
                                <div className="testlabel">
                                    Date
                                </div>
                            </div>
                            <br />
                            <div className="teststruct">
                                <input type="text" className="testput" placeholder="Enter a time like 7:00 AM PDT" value={event.start_time} onChange={(e)=>setEvent({...event, start_time: e.target.value})} />
                                <div className="testlabel">
                                    Start Time
                                </div>
                            </div>
                            <br />
                            <div className="teststruct">
                                <input type="text" className="testput" placeholder="Enter a time like 7:00 PM PDT" value={event.end_time} onChange={(e)=>setEvent({...event, end_time: e.target.value})}/>
                                <div className="testlabel">
                                    End Time
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="create-info-group">
                        <div className="create-section-header">
                            <div>Price</div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                What is the cost of tickets for this event?
                            </div>
                        </div>
                        <div className="form-create-structure">
                            <div className="teststruct">
                                <input type="text" className="testput" placeholder="$" value={event.price} onChange={(e)=>setEvent({...event, price: e.target.value})}/>
                                <div className="testlabel">Price</div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="create-desc-group">
                        <div className="create-section-header">
                            <div>Description</div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Give a small summary about the event and any additional details
                            </div>
                        </div>
                        <div className="form-create-structure">
                            <textarea className="input-create-inner-ta" rows="8" cols="135" value={event.description} onChange={(e)=>setEvent({...event, description: e.target.value})}></textarea>
                        </div>
                    </div>

                    <div className="create-info-group">
                        <div className="create-section-header">
                            <div>Photo</div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Add a banner photo for your event
                            </div>
                        </div>
                        <div className="form-create-structure">
                            <div className="teststruct">
                                <input type="file" className="testput" onChange={e=> setEvent({...event, photoUrl: e.target.files[0]})}/>
                            </div>
                        </div>
                    </div>

                    {/* <div className="create-info-group">
                        <div className="create-section-header">
                            <div>
                                Description
                            </div>
                        </div>        
                        <div className="form-create-structure">
                            <div className="create-field-struct">
                                <label className="input-create-outer">Description</label>
                                <textarea className="input-create-inner-ta" rows="8" cols="135" placeholder="Write about your event" value={event.description} onChange={(e)=>setEvent({...event, description: e.target.value})}></textarea>
                            </div>
                        </div>
                    </div> */}

                    

                    
                    {/* <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Date (enter like "Fri, May 2, 2021")</label>
                            <input type="text" className="input-create-inner" value={event.date} onChange={(e)=>setEvent({...event, date: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Event Starts (enter time like "7:00 AM")</label>
                            <input type="text" className="input-create-inner" value={event.start_time} onChange={(e)=>setEvent({...event, start_time: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Event Ends (enter time and specify zone like "7:00 PM PDT")</label>
                            <input type="text" className="input-create-inner" value={event.end_time} onChange={(e)=>setEvent({...event, end_time: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Venue location</label>
                            <input type="text" placeholder="Where is it?" className="input-create-inner" value={event.address} onChange={(e)=>setEvent({...event, address: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Ticket Price($)</label>
                            <input type="number" className="input-create-inner" value={event.price} onChange={(e)=>setEvent({...event, price: e.target.value})}/>
                        </div>
                    </div>

                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Event Photo</label>
                            <input type="file" className="input-create-inner" onChange={e=> setEvent({...event, photoUrl: e.target.files[0]})}/>
                        </div>
                    </div> */}
                   
                    <div className="submit-event">
                            <button className="submit-btn">
                                Create Event
                            </button>     
                    </div>
                </form>

            </div>

        </div>
    );

}

export default CreateEvent;