import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Home" >
        <div className="lander">
          <h2>Login</h2>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formname">
              <FormControl type="name" placeholder="User Name" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup controlId="formSubmit">
            <Button variant="btn btn-success" onClick={() => history.push('/Dashboard')}>Login</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
