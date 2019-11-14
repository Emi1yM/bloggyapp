import React, { Component } from "react";
import axios from "axios";
import { Button, Jumbotron, Container, Form, Col } from 'reactstrap';

import Registration from "./auth/Registration";
import Login from "./auth/Login";



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    // axios
    //   .post("http://localhost:3001/logout", { withCredentials: true })
    fetch(`http://localhost:3001/logout`, {method: 'POST'})
      .then(response => {
        console.log("RESPONSE: ", response)
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <Container>
      <Jumbotron >
      <main class="site__main">
          <div>
            <h1>Between Small and Big.</h1>
          </div>
        </main>
        <hr></hr>
        {/* <h1>Status: {window.localStorage.current_user !== null ? this.props.loggedInStatus : "not logged in"}</h1> */}
        
        </Jumbotron>
        
        <Form className="input-group">
        <Col sm="12" md={{ size: 10, offset: 4 }}>
        <h3>Welcome Back, Blogger! Login Here!</h3>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <br></br>
        <br></br>
        <h3>New to Between Small and Big? Register Here!</h3>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <hr></hr>
        <br></br>
        <button className="btn draw-border" onClick={() => this.handleLogoutClick()}>Logout</button>
        </Col>
        </Form>
        </Container>
    );
  }
}