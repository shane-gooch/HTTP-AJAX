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

    componentDidUpdate(prevProps) {
        
        if (this.props.activeFriend !== prevProps.activeFriend){
            this.setState({updateFriend: this.props.activeFriend});
        }
 
    }

    handleChange = e => {
        this.setState({
            updateFriend: {
                ...this.state.updateFriend,
                [e.target.name]: e.target.value
            }
        }) 
    }

    render(){
        return (
            <form className='form' >
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