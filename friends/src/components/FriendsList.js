import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FriendBox, FriendTitle, Box, FriendId, FriendName, FriendAge, FriendEmail, AllBoxes } from './Styles';

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
            <AllBoxes>
                <FriendTitle>Friends</FriendTitle>
                {this.state.isLoading}
                <Box>
                    {this.state.friends.map(friend => 
                        <FriendBox key={friend.id}>
                            <FriendId>{`ID: ${friend.id}`}</FriendId>
                            <FriendName>{`Name: ${friend.name}`}</FriendName>
                            <FriendAge>{`Age: ${friend.age}`}</FriendAge>
                            <FriendEmail>{`Email: ${friend.email}`}</FriendEmail>
                        </FriendBox>)
                    }
                </Box>
            </AllBoxes>
        )
    }
}

export default FriendsList;