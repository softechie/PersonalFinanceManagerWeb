import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
import LoginForm from '../components/loginForm'

class Login extends Component {

  handleSubmit = (values) => {
    console.log(values)
    this.props.loginUser(values)
  }

  componentWillMount() {
    let keycloakInst = this.props.keycloak
    keycloakInst.init().then(authenticated => {
      console.log("login page"+keycloakInst.authenticated)
      this.props.updateKeycloak(keycloakInst)
      if(!authenticated)
        keycloakInst.login()
      else
        this.props.history.push('/')
    })
    // console.log(keycloakInst)
    // if(!keycloakInst.authenticated) {
    //   console.log("login page"+keycloakInst.authenticated)
    //   // keycloakInst.login()
    // }
    // else
    //   this.props.history.push('/')
  }

  render() {
    return (
      <div >
        {/*<LoginForm title="Personal Finance Manager Login"
                   submitName="Login"
                   onSubmit={this.handleSubmit}>
        </LoginForm>*/}
        <h4>Redirecting...</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  keycloak: state.userReducer.keycloak
})

const mapDispatchToProps = dispatch => ({
  loginUser: (loginDetails) => dispatch(actions.loginUser(loginDetails)),
  updateKeycloak: (keycloak) => dispatch(actions.updateKeycloak(keycloak))
})

export default connect(mapStateToProps, mapDispatchToProps) (Login)



  
