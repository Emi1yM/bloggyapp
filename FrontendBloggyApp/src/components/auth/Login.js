import React, { Component } from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const {
            email,
            password
        } = this.state;
        
        axios.post("http://localhost:3000/sessions", {
        user: {
            email: email,
            password: password
        }
    },
    // { withCredentials: true }
    ).then(response => {
        if (response.data.status ==='created') {
        this.props.handleSuccessfulAuth(response.data);
        }
    })
    .catch(error =>{
        console.log("login error", error);
    });
        event.preventDefault();
    }
    
    render() {
        return (
            <Container className="Login">
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Col>
                    <FormGroup>
                        <Label>Email</Label>
                    <Input type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Password</Label>
                    <Input type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required />
                    </FormGroup>
                    </Col>

                    <button className="btn draw-border" type="submit">Login</button>
                </Form>
            </Container>
        )
    }
}