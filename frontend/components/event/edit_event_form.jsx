import React from "react";
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import regeneratorRuntime from "regenerator-runtime";
import { FaCalendarAlt, 
    FaGlobeAmericas, 
    FaEdit, 
    FaTicketAlt,
    FaImage,
    FaInfoCircle } from 'react-icons/fa';

function EditEvent(props) {
    const [event, setEvent] = useState(null);

    useEffect(()=>{
        const fetchdata = async ()=>{
            let fetchedEvent = await props.fetchEvent(props.match.params.eventId);
            delete fetchedEvent.event.photoUrl;
            await setEvent({...fetchedEvent.event, photoUrl: undefined});
        }
        fetchdata();
    }, []);
    
    useEffect(()=>{props.clearEventErrors()},[]);
    
    //events creation errors handling??

    const handleErrors = () => {
        // console.log("props errors", props.errors);
        if (props.errors.length ===0) {
            return null;
        } else {
            window.scrollTo(0,0);
            return <ul className="create-errors-list">{props.errors.map((error,idx)=>(<li key={idx}>{error}</li>))}</ul>
        } 
    }



    const loggingout = e => {
        e.preventDefault();
        // console.log('logged out');
        /*
        running any kind of route to logging out changes current user
        which is a prop, use an if to return null to avoid error
        */
        // props.logout().then(()=> <Redirect to='/' />);
        props.logout().then(()=>props.history.push('/login'))
    }

    const handleSubmit = e => {
        // console.log('event', event);
        e.preventDefault();
        
        const formData = new FormData();

        formData.append('event[id]', event.id);
        formData.append('event[title]', event.title);
        formData.append('event[description]', event.description);
        formData.append('event[date]', event.date);
        formData.append('event[start_time]', event.start_time);
        formData.append('event[end_time]', event.end_time);
        formData.append('event[creator_id]', props.currentUser.id);
        formData.append('event[price]', event.price);
        formData.append('event[address]', event.address);
    
            

        if (event.photoUrl) {
            formData.append('event[photo]', event.photoUrl);
        } 

        if (!event || event.photoUrl ==undefined || !event.photoUrl) {
            // console.log("here");
            props.updateEvent({});
            return
        }

        // console.log('form:', formData);
        props.updateEvent(formData).then(()=>props.history.push(`/events/${event.id}`));
        

        // formData.append('event[id]', event.id);
        // formData.append('event[title]', event.title);
        // formData.append('event[description]', event.description);
        // formData.append('event[date]', event.date);
        // formData.append('event[start_time]', event.start_time);
        // formData.append('event[end_time]', event.end_time);
        // formData.append('event[creator_id]', props.currentUser.id);
        // formData.append('event[price]', event.price);
        // formData.append('event[address]', event.address);

        // if (event.photoUrl) {
        //     formData.append('event[photo]', event.photoUrl);
        // } 

        // console.log('form:', formData);
        // props.updateEvent(formData).then(()=>props.history.push(`/events/${event.id}`));
        //push to home and render new event in the home page
    };

    //
    if (!event) {
        // console.log("no event");
        return null;
    }

    return (
        // {!props.event ? null :}
        <div>
            <NavbarContainer />
            {/* {printo()} */}
            <div className="create-form-container">
                <div className="create-form-header">
                    <div className="create-header-text">
                        Update Your Event
                    </div>
                </div>
                {handleErrors()}
                <form onSubmit={handleSubmit} className="form-struct">

                    <div className="create-info-group">
                        <div className="create-section-header">
                            <div>
                                <FaInfoCircle /> &nbsp;
                                Event Title
                            </div>
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
                            <div>
                                <FaGlobeAmericas /> &nbsp;
                                Location
                            </div>
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
                            <div>
                                <FaCalendarAlt /> &nbsp;
                                Date and Time
                            </div>
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
                            <div>
                                <FaTicketAlt /> &nbsp;
                                Price
                            </div>
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
                            <div>
                                <FaEdit /> &nbsp;
                                Description
                            </div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Give a small summary about the event and any additional details
                            </div>
                        </div>
                        <div className="form-create-structure">
                            <textarea className="input-create-inner-ta" rows="8" cols="135" placeholder="Add some details" value={event.description} onChange={(e)=>setEvent({...event, description: e.target.value})}></textarea>
                        </div>
                    </div>

                    <div className="create-info-group">
                        <div className="create-section-header">
                            <div>
                                <FaImage /> &nbsp;
                                Photo
                            </div>
                        </div>        
                        <div className="create-section-blurb">
                            <div>
                                Add a banner photo for your event
                            </div>
                        </div>
                        <div className="form-create-structure">
                            <div className="teststructphoto">
                                <input type="file" className="testputphoto" onChange={e=> setEvent({...event, photoUrl: e.target.files[0]})}/>
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
                                Update Event
                            </button>     
                    </div>
                </form>

            </div>

        </div>
    );

}

export default EditEvent;

{/* <div className="create-form-container">
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

                    <button>Update Event</button>
                </form>

            </div> */}