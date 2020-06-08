import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import centralperk from './images/centralperk.jpg';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';

import { MainPage, MainHeaders, LinkOne, LinkTwo, LinkThree, LinkFour, Perk } from './components/Styles'

class App extends React.Component {

  constructor(){
    super();
    this.state = { credentials: {} }
  }

  render() {
    return (
      <div>
        <Router>
          <MainPage>
            <Perk src={centralperk} alt='Coffee shop' />
            <MainHeaders> I'll be there for you...</MainHeaders>
            <Link to='/login'><LinkOne>Login</LinkOne></Link>
            <Link to='/friends-list'><LinkTwo>Friends</LinkTwo></Link>
            <Link to='/add-friend'><LinkThree>Add Friend</LinkThree></Link>
            <Link to='/delete-friend'><LinkFour>Delete Friend</LinkFour></Link>
            <MainHeaders>...'Cause you're there for me too.</MainHeaders>
          </MainPage>

          <Switch>
            
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/friends-list' component={FriendsList} />
            <PrivateRoute exact path='/add-friend' component={AddFriend} />
            <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
          </Switch> 
        </Router>
      </div>
    )
  }
}

export default App;