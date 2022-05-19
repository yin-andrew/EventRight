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
import EventPanel from './event/event_index_panel';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <ProtectedRoute exact path='/user/show' component={ UserShowContainer } />
            {/* <Route exact path='/' component={ GreetingContainer }/> */}
            <Route exact path ='/events/:eventId' component={EventShowContainer}/>
            <Route exact path ='/ti' component={EventPanel}/>
            <Route exact path ='/home' component={EventIndexContainer}/>
            <Route exact path='/' component={ NavbarContainer }/>

        </Switch>
    </div>
);

export default App;