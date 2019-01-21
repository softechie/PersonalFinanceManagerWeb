import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
// import LoginForm from '../components/loginForm'

class Login extends Component {

  handleSubmit = (values) => {
    this.props.loginUser(values)
  }

  componentWillMount() {
    let keycloakInst = this.props.keycloak
    keycloakInst.init({onLoad: 'check-sso'}).then(authenticated => {
      this.props.updateKeycloak(keycloakInst)
      if(!authenticated)
        keycloakInst.login()
      else {
        // keycloakInst.loadUserInfo()
        // .then(keycloakProfile => {
        //   console.log(keycloakProfile.given_name)
        //   let profile = {
        //     emailId: keycloakProfile.email,
        //     firstName: keycloakProfile.given_name,
        //     lastName: keycloakProfile.family_name
        //   }
        //   this.props.updateKeycloakUser(profile)
        // })
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div>
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
  // loginUser: (loginDetails) => dispatch(actions.loginUser(loginDetails)),
  updateKeycloak: (keycloak) => dispatch(actions.updateKeycloak(keycloak)),
  updateKeycloakUser: (profile) => dispatch(actions.updateKeycloakUser(profile))
})

export default connect(mapStateToProps, mapDispatchToProps) (Login)



  
