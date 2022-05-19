import React, { useEffect }from "react";


function EventShow(props) {
    
    useEffect(()=> {props.fetchEvent(props.event.id)}, []);

    const seeProps = () => {
        console.log('props', props);
    }

    return (

        <div>{props.event.title}</div>

    ); 
}

export default EventShow;