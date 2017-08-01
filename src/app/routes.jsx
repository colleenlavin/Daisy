import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import HomeIndex from './components/index_home';
import UserLogin from './components/user/login';
import UserLogout from './components/user/logout';
import UserRegister from './components/user/register';
import UserProfile from './components/user/profile';
import ResetPassword from './components/user/reset_password';
import Vendors from './components/vendors';
import EventForm from './components/eventform';
import ToDo from './components/todo';
import requireAuth from './utils/authenticated';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeIndex} />
        <Route path="/login" component={UserLogin} />
        <Route path="/logout" component={UserLogout} />
        <Route path="/register" component={UserRegister} />
        <Route path="/vendors" component={Vendors} />
        <Route path="/checklist" component={ToDo} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/profile" component={UserProfile} onEnter={requireAuth} />
    </Route>

);
