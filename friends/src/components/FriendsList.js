import React from 'react';


const FriendsList = props => {
    // console.log(props)
    return (
        <div className='friends-list'>
            {props.friends.map(friend => {
                return(
                    <div key={friend.id}className='friend'>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default FriendsList; 