import React, { useEffect }from "react";


function EventShow(props) {
    
    useEffect(()=> console.log('hits'), []);
    useEffect(()=> console.log(props), []);
    useEffect(()=> props.fetchEvent(props.event.id), []);


    return (

        <div>egg</div>

    ); 
}

export default EventShow;