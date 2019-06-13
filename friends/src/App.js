import React from 'react';
import './App.scss';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import POSTFriendsForm from './components/POSTFriendsForm';
import PUTFriendsForm from './components/PUTFriendsForm';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      friends: [],
      activeFriend: null, 
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

  addNewFriend = friend => {
    console.log(friend)
    axios
        .post('http://localhost:5000/friends', friend ) 
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))  
  }

  setUpdateFriend = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend 
    })
  }
  // updateFriend = updateFriend => {
  //   axios 
  //     .put(`http://localhost:5000/friends${id}`, updateFriend)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err))
  // }


  render(){
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} setUpdateFriend={this.setUpdateFriend}/>
        <POSTFriendsForm addNewFriend={this.addNewFriend}  />
        <PUTFriendsForm activeFriend={this.state.activeFriend} />
      </div>
    );
  }
}

export default App;
