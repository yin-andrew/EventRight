# EventRight

EventRight is a web application where users can find local events to attend. EventRight is a full stack clone of [Eventbrite](https://www.eventbrite.com/) 

[Live link to EventRight](https://event-right.herokuapp.com/#/)

## Technologies
EventRight is built with a React/Redux frontend and a Ruby on Rails backend. The styling is done with html and vanilla css. The database of choice was PostgresSQL but the images for events are stored on AWS S3 facilitated by Active Storage and the 'aws-s3-sdk' gem. Leveraged functional components and hooks for better logic and readability.   

## Welcome Page

## Technical Details

### Async/Await to setState

To edit an event, I had to fetch the correct event and properly populate the fields. I was running into errors on the first render because the data had not yet been fetched and I didn't want to return null as a placeholder while the promise was pending. I found async await as a way to suspend execution and make useEffect synchronous to fit my purposes. I made fetchdata an async function and made the dependency array an empty array so useEffect would only run once. 
```
const [event, setEvent] = useState(null);

useEffect(()=>{
    const fetchdata = async ()=>{
        let fetchedEvent = await props.fetchEvent(props.match.params.eventId);
        delete fetchedEvent.event.photoUrl;
        await setEvent({...fetchedEvent.event, photoUrl: undefined});
    }
    fetchdata();
}, []);
```
