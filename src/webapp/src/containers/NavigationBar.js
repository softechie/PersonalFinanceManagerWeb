import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav} from 'reactstrap'
import NavigationItems from '../components/NavBar/NavItems'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    let isloggedIn = this.props.auth.loggedIn
    let navItems = isloggedIn ? <NavigationItems/> : ""
    let authBtn
    
    if(isloggedIn) {
      authBtn = <NavLink to="/logout">Logout <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
    } else {
      authBtn = <NavLink to="/login">Login <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
    }

    
    return (
      <Navbar color="menu" dark expand="lg">
        <NavbarBrand href="/" className="pfm">PFM</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            {navItems}
            </Nav>
                 
          <Nav className="ml-auto" navbar>
            {authBtn}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.userReducer
})

export default connect(mapStateToProps, null) (NavigationBar)