import React from 'react';
import './App.scss';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import POSTFriendsForm from './components/POSTFriendsForm';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      friends: []
    }
  }  
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err));
  }

  addNewFriend = newFriend => {
    axios
        .post('http://localhost:5000/friends', newFriend ) 
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))  
  }

  updateFriend = (id, updateFriend) => {
    axios 
      .put(`http://localhost:5000/friends${id}`, updateFriend)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }


  render(){
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} updateFriend={this.updateFriend}/>
        <POSTFriendsForm addNewFriend={this.addNewFriend} />
      </div>
    );
  }
}

export default App;
