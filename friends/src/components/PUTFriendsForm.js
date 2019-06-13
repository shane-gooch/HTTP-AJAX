import React from 'react';

class PUTFriendsForm extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            updateFriend: {
                name: '',
                age: '',
                email:''
            } 
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.updateFriend,
                [e.target.name]: e.target.value
            }
        }) 
    }

    updateFriend = e => {
        e.preventDefault();
        this.props.updateFriend(1, this.state.updateFriend); 
    }

    render(){
        return (
            <form className='form' onSubmit={this.updateFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={this.handleChange}
                    value={this.state.updateFriend.name}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={this.handleChange}
                    value={this.state.updateFriend.age}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.state.updateFriend.email}
                />
                <button type='submit'>Update</button>
            </form>
        );
    }
};

export default PUTFriendsForm; 