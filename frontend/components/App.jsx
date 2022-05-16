import React from 'react';
import LoginFormContainer from './form/login_form_container';
import { Switch, Route } from 'react-router-dom';
import SignupFormContainer from './form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './profile/user_show_container';
import Greeting from './greetings/greeting'
import GreetingContainer from './greetings/greeting_container'

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <ProtectedRoute exact path='/user/show' component={ UserShowContainer } />
            <Route exact path='/' component={ GreetingContainer }/>
        </Switch>
    </div>
);

export default App;