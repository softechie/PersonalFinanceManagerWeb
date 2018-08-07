import React, { Component } from "react";
import {Button, FormGroup,Label,Row,Container,Col,CardText,CardBody } from "reactstrap";
import { Route, Switch } from 'react-router-dom';
import api from '../api/apiController'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ProfileForm from "../components/ProfileForm"

class Profile extends Component {  
  componentWillMount = () => {
    // console.log(values)
    this.props.getProfile('kr')
  }

  handleSubmit = (values) =>{
    console.log(values)
  }

  render() {
    return (
      // title: PropTypes.string.isRequired,
      // submitName: PropTypes.string.isRequired,
      // handleSubmit: PropTypes.func.isRequired
      <ProfileForm title='Profile' submitName="Edit Profile" handleSubmit={this.handleSubmit}></ProfileForm>

    );
  }
} 
const mapStateToProps = state => ({
  currentUser: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  getProfile: (emailId) => dispatch(actions.getProfile(emailId))
})

export default connect(mapStateToProps, mapDispatchToProps) (Profile)




