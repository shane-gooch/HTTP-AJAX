import React from 'react';

class POSTFriendsForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friend: {
                name: '',
                age: '',
                email:''
            } 
        }
    };

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        }) 
    }

    addNewFriend = e => {
        e.preventDefault();
        console.log(e)
        this.props.addNewFriend(this.state.friend); 
    }

    render(){
        return (
            <form className='form' onSubmit={this.addNewFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={this.handleChange}
                    value={this.state.friend.name}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={this.handleChange}
                    value={this.state.friend.age}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.state.friend.email}
                />
                <button type='submit'>Add New Friend</button>
            </form>
        );
    }
};

export default POSTFriendsForm; 