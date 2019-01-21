import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Logout extends Component {
  componentWillMount() {
    // this.props.logout()
    if(this.props.keycloak.authenticated) {
      this.props.history.push('/')
      this.props.keycloak.logout()
    }
    else
      this.props.history.push('/')
  }
  
  render() {
    return (
      <div>Logging out...</div>
    )
  }
}

const mapStateToProps = state => ({
  keycloak: state.userReducer.keycloak
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps) (Logout)