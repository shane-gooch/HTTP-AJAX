import React from 'react';

class POSTFriendsForm extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            newFriend: {
                name: '',
                age: '',
                email:''
            } 
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        }) 
    }

    addNewFriend = e => {
        // e.preventDefault();
        this.props.addNewFriend(this.state.newFriend); 
    }

    render(){
        return (
            <form className='form' onSubmit={this.addNewFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={this.handleChange}
                    value={this.state.newFriend.name}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={this.handleChange}
                    value={this.state.newFriend.age}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.state.newFriend.email}
                />
                <button type='submit'>Add New Friend</button>
            </form>
        );
    }
};

export default POSTFriendsForm; 