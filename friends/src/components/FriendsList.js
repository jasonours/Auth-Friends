import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component{

    constructor(){
        super();
        this.state = { 
            friends: [], 
            isLoading: false }
    }

    componentDidMount() {
        this.getFriendsList();
    }

    getFriendsList = () => {
        this.setState({
            ...this.state,             isLoading: true
        });
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log("Successfully got friends",res);
                this.setState({ friends: res.data});
                this.setState({ 
                    ...this.state, isLoading: false 
                });
        })
            .catch(err => {
                console.log(err);
                this.setState({
                    ...this.state, isLoading: false
                });
        })
    }

    render(){
        return(
            <div>
                <h2>Friend List</h2>
                {this.state.isLoading}
                <div>
                    {this.state.friends.map(friend => 
                        <div key={friend.id}>
                            <h4>{`ID: ${friend.id}`}</h4>
                            <h4>{`${friend.name}`}</h4>
                            <h4>{`${friend.age} years old`}</h4>
                            <h4>{`${friend.email}`}</h4>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default FriendsList;