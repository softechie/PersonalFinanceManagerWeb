import React, { Component } from "react";
import {Button, FormGroup,Label,Row,Container,Col,CardText,CardBody } from "reactstrap";
import { Route, Switch } from 'react-router-dom';
import api from '../api'
import LoginForm from "../components/loginForm"
class Login extends Component {

  
  handleSubmit = (values) => {
    console.log(values)
   
    api.post('/login', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }



 
  render() {
    return (
      <div className="wrap" >
      <Row>
        <Col>
          <div className="m-t-10">
            <LoginForm title="Personal Finance Manager"
                              submitName="Login"
                              submitName1="Register"
                              onSubmit={this.handleSubmit}>
            </LoginForm>
          </div>
        </Col>
      </Row>
       
       </div>
    );
  }
}
export default Login;
  
