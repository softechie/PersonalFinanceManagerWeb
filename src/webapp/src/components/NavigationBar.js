import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap'

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
    return (
      <Navbar color="menu" dark expand="lg" fixed="top">
        <NavbarBrand href="/">PFM</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/income/all" className="nav-link" activeClassName="active">Income</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/expense" className="nav-link" activeClassName="">Expense</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/investments/all" className="nav-link" activeClassName="active">Investments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/bankAccount/all" className="nav-link" activeClassName="active">Bank Account</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/">Logout <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar