import React from 'react';
import PUTFriendsForm from './PUTFriendsForm';


const FriendsList = props => {
    console.log(props)
    return (
        <div className='friends-list'>
            {props.friends.map(friend => {
                return(
                    <div key={friend.id}className='friend'>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <PUTFriendsForm updateFriend={props.updateFriend}/>
                    </div>
                )
            })}
        </div>
    );
};

export default FriendsList; 