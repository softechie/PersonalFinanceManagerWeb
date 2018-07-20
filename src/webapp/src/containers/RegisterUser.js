import React, { Component } from "react";
import {Button, FormGroup,Label,Row,Container,Col,CardText,CardBody } from "reactstrap";
import { Route, Switch } from 'react-router-dom';
import api from '../api'
import RegisterUserForm from "../components/RegisterUserForm"
class RegisterUser extends Component {

  
  handleSubmit = (values) => {
    console.log(values)
   
    api.post('/register/new', values)
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
      <div className="" >
      <Row>
        <Col>
          <div className="">
            <RegisterUserForm title="Personal Finance Manager"
                              submitName="Register"
                              onSubmit={this.handleSubmit}>
            </RegisterUserForm>
          </div>
        </Col>
      </Row>
       
       </div>
    );
  }
}
export default RegisterUser;
  
