import React, { Component } from "react";
import axios from 'axios';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Card, CardBody
  } from 'reactstrap';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
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
            password,
            password_confirmation
        } = this.state;
        
        axios.post("http://localhost:3000/registrations", {
        user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
    },
    { withCredentials: true }
    ).then(response => {
        if (response.data.status ==='created') {
        this.props.handleSuccessfulAuth(response.data);
        }
    })
    .catch(error =>{
        console.log("registration error", error);
    });
        event.preventDefault();
    }
    
    render() {
        return (
            <Container>
            {/* <Container className="registration"> */}
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

                    <Col>
                    <FormGroup>
                    <Label>Password Confirmation</Label>
                    <Input type="password" 
                    name="password_confirmation" 
                    placeholder="Password Confirmation" 
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange} 
                    required />
                    {/* <FormFeedback valid tooltip>Your account was created- sign in above!</FormFeedback> */}
                    </FormGroup>
                    </Col>
                    <button className="btn draw-border" type="submit">Register</button>
                </Form>
                </Container>
        )
    }
}