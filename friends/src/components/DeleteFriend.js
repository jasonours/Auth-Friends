import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { FriendDelete, FriendTitle, AllBoxes } from './Styles';

class DeleteFriend extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '', 
            deleteFriend: ''
        }
    }

    submitHandler = event => {
        event.preventDefaulkt();
        axiosWithAuth()
            .delete(`/api/friends/${this.state.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    changeHandler = event => {
        this.state({
            id: event.target.value
        })
        console.log(this.state.id)
    }

    render() {
        return(
            <AllBoxes>
                <FriendTitle>We were on a BREAK!</FriendTitle>
                <FriendDelete>
                    <form onSubmit={this.submitHandler}>
                        <input
                            onChange={this.changeHandler}
                            placeholder="Enter friend to delete"
                        />
                        <button>Delete Friend</button>
                    </form>
                </FriendDelete>
            </AllBoxes>
        )
    }
}

export default DeleteFriend;