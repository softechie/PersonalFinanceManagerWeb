import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import api from '../api/apiController'
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
      <Row>
        <Col>
          <RegisterUserForm title="Personal Finance Manager Sign Up"
                            submitName="Register"
                            onSubmit={this.handleSubmit}>
          </RegisterUserForm>
        </Col>
      </Row>
    );
  }
}

export default RegisterUser
  
