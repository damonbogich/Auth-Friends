import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriendForm from './Components/AddFriendForm';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friendslist" component={FriendsList} />
          <Route path="/addfriend" component={AddFriendForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
