import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
import NavigationBar from './NavigationBar'

class Logout extends Component {
    componentWillMount() {
    this.props.logout()
    }
   render(){
   return (
<div></div>

   )
    }
    }
const mapDispatchToProps = dispatch => ({
   logout: () => dispatch(actions.logout())
  })

  export default connect(null, mapDispatchToProps) (Logout)