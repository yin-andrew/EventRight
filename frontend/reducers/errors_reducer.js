import { combineReducers } from "redux";
import eventsErrorsReducer from "./events_errors_reducer";
import likesReducer from "./likes_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import ticketErrorsReducer from "./tickets_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    events: eventsErrorsReducer,
    tickets: ticketErrorsReducer
});

export default errorsReducer;