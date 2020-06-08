import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
            <div>
                <h2>Delete Friend</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        onChange={this.changeHandler}
                        placeholder="Enter friend to delete"
                    />
                    <button>Delete Friend</button>
                </form>
            </div>
        )
    }
}

export default DeleteFriend;