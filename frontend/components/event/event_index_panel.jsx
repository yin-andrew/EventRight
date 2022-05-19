import React from "react";

function EventPanel(props) {
// props.photoUrl, title, date, start_time, address, price
//fetch the dimensions of the panel to size it 
// may need to fetch the creator info so use fetchUser via container?

//max-width and height the photo, then use auto. 
//could hardcode with px because panel is px

    // return (
    //     <div className="panel-container">
    //         <div className="panel-image-container">
    //             {/* <img src={props.photoUrl} alt="" /> */}
    //         </div>
    //         <div className="panel-body">
    //             <div className="event-panel-title">{props.title}</div>
    //             <div className="event-panel-date-time">{props.date} {'\u2B24'} {props.start_time} </div>
    //             <div className="event-panel-address">{props.address}</div>
    //             <div className="event-panel-price"> Starts at {props.price} </div>
    //             {/* creator info */}

    //         </div>  
    //     </div>
    // );
    // return (
    //     <div className="panel-container">
    //         <div className="panel-image-container">
    //             {/* <img src={props.photoUrl} alt="" /> */}
    //         </div>
    //         <div className="panel-wrappa">
    //             <div className="panel-body-wrapper">
    //                 <div className="panel-body">
    //                     <div className="event-panel-title">626 Night Market: Bay Area: May 27-29 Memorial Weekend</div>
    //                     <div className="event-panel-date-time">today  {'\u2B24'} 7:00 PM </div>
    //                     <div className="event-panel-address">this is the address and the addres and anything else and else and else everything else and else </div>
    //                     <div className="event-panel-price"> Starts at $5 </div>
    //                     <div className="event-panel-creator">organizer: jeff</div>
    //                 </div>  

    //             </div>

    //         </div>
    //     </div>
    // );
    return (
        <div className="panel-container">
            <div className="panel-image-container">
                {/* <img src={props.photoUrl} alt="" /> */}
            </div>
            <div className="panel-wrappa">
                <div className="panel-body-wrapper">
                    <div className="panel-body">
                        <div className="event-panel-title">626 Night Market: Bay Area: May 27-29 Memorial Weekend</div>
                        <div className="event-panel-date-time">today  {'\u2B24'} 7:00 PM </div>
                        <div className="event-panel-address">this is the address and the addres and anything else and else and else everything else and else </div>
                        <div className="event-panel-price"> Starts at $5 </div>
                        <div className="event-panel-creator">organizer: jeff</div>
                    </div>  

                </div>

            </div>
        </div>
    );
}

export default EventPanel;
// need:
// Image, title, date, start_time, address, price