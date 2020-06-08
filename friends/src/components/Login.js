import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { LoginForm, FriendTitle } from './Styles'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
        console.log(this.state.credentials);
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            ...this.state, isLoading: true
        });
        axiosWithAuth()
            .post('./api/login', this.state.credentials)
            .then (res => {
                window.localStorage.setItem('token', res.data.payload);
                this.setState({
                    ...this.state, isLoading: false
                });
                this.props.history.push('/protected');
            })
            .catch (error => {
                console.log(error)
            })
    }

    render() {
        return(
            <LoginForm>
                <FriendTitle>Login</FriendTitle>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='username'
                        placeholder='Username'
                        onChange={this.handleChange} 
                    />
                    <input 
                        name='password'
                        placeholder='Password'
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </LoginForm>
        )
    }
}

export default Login;