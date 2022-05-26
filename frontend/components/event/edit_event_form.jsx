import React from "react";
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import regeneratorRuntime from "regenerator-runtime";

function EditEvent(props) {
    const [event, setEvent] = useState(null);

    // useEffect(()=>{props.fetchEvent(props.match.params.eventId)})
    
    useEffect(()=>{
        const fetchdata = async ()=>{
            let fetchedEvent = await props.fetchEvent(props.match.params.eventId);
            // console.log("parsed",parsedEvent.event);
            setEvent(fetchedEvent.event);

        }
        fetchdata();
    }, []);
    
    //events creation errors handling??

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
        console.log('event', event);
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
        formData.append('event[photo]', event.photoUrl);

        console.log('form:', formData);
        props.updateEvent(formData).then(()=>props.history.push(`/events/${event.id}`));
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
            {console.log("props event", props.event)}
            {console.log("event", event)}

            <div className="create-form-container">
                <div className="create-form-header">
                    <div className="create-header-text">
                        Edit Your Event
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form-struct">

                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Event Title</label>
                            <input type="text" className="input-create-inner" placeholder="Be clear and descriptive" value={event.title} onChange={(e)=>setEvent({...event, title: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-create-structure">
                        <div className="create-field-struct">
                            <label className="input-create-outer">Description</label>
                            <textarea className="input-create-inner-ta" value={event.description} onChange={(e)=>setEvent({...event, description: e.target.value})}></textarea>

                        </div>
                    </div>
                    <div className="form-create-structure">
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
                    </div>
                    <button className="submit-event">
                        <div className="submit-btn">
                            Update Event
                        </div>
                    </button>
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