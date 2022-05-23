import { combineReducers } from "redux";
import eventsErrorsReducer from "./events_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    events: eventsErrorsReducer
});

export default errorsReducer;