import { combineReducers } from "redux";
import eventsReducer from "./events_reducer";
import usersReducer from "./users_reducer";
import ticketsReducer from "./tickets_reducer";
import likesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    tickets, ticketsReducer,
    likes: likesReducer
});

export default entitiesReducer;