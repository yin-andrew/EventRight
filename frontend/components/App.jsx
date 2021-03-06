import React from 'react';
import LoginFormContainer from './form/login_form_container';
import { Switch, Route } from 'react-router-dom';
import SignupFormContainer from './form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './profile/user_show_container';
import GreetingContainer from './greetings/greeting_container';
import NavbarContainer from './navbar/navbar_container';
import EventShowContainer from './event/events_show_container';
import EventIndexContainer from './event/event_index_container';
import CreateEventFormContainer from './event/create_event_form_container';
import EditEventFormContainer from './event/edit_event_form_container';
import EventShow from './event/event_show';
import LikesIndex from './like/likes_index';
import LikesIndexContainer from './like/likes_index_container';
import LikesIndexItemContainer from './like/likes_index_item_container';
import OwnEventsContainer from './hosted/own_events_container';
import TicketsIndexContainer from './tickets/tickets_index_container';
import Modal from './modal/modal'
import SearchResultsContainer from './search/search_results_container';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <ProtectedRoute exact path='/user/show' component={ UserShowContainer } />
            <Route exact path ='/events/:eventId' component={EventShowContainer}/>
            <Route exact path ='/sho' component={EventShow}/>
            <Route exact path ='/home' component={EventIndexContainer}/>
            <Route exact path='/' component={UserShowContainer}/>
            <ProtectedRoute exact path='/create' component={CreateEventFormContainer}/>
            <Route exact path='/edit/:eventId' component={EditEventFormContainer}/>
            <ProtectedRoute exact path='/likes' component={LikesIndexContainer}/>
            <ProtectedRoute exact path ='/own' component={OwnEventsContainer}/>
            <Route exact path='/tix' component={TicketsIndexContainer}/>
            <Route exact path="/search-results" component={SearchResultsContainer}></Route>
            <Route path='/' component={UserShowContainer}/>
        </Switch>
    </div>
);

export default App;