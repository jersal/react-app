import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import MeetupUserDetails from './MeetupUserDetails';
import AddUser from'./AddUser';
import EditUser from './EditUser';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Meetups} />
            <Route exact path='/about' component={About} />
            <Route exact path='/meetups/:id' component={MeetupUserDetails} />
            <Route exact path='/user/add' component={AddUser} />
            <Route exact path='/user/edit/:id' component={EditUser} />
            

        </Switch>
    </main>
)

export default Main;