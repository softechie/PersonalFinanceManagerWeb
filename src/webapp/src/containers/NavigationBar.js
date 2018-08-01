import React, { Fragment } from 'react'
import { NavLink,  Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem , NavItem} from 'reactstrap';
import Avatar from 'react-avatar';
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
    // this.toggleDropDown = this.toggleDropDown.bind(this)
    this.state = {
      isOpen: false,
      // dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  // toggleDropDown() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen

  //   })
  // }


  render() {
    let isloggedIn = this.props.auth.loggedIn
    let navItems = isloggedIn ? <NavigationItems/> : ""
    let authBtn
    
    if(isloggedIn) {
      authBtn = <NavLink to="/logout">Logout <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
    
    //   authBtn = <NavItem style={{marginRight:34}}>
    //  <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
    //     <DropdownToggle >
    //     <Avatar skypeId="sitebase" size="50" onClick={this.togglePopup} round={true}/>
    //     </DropdownToggle>
    //     <DropdownMenu >
    //       <DropdownItem header>Header <Link to="/Profile" onClick={this.toggleDropDown}><i style={{position: 'absolute', right: 5, color: 'gray'}} class="fa fa-cog" aria-hidden="true" ></i></Link></DropdownItem>
    //       <DropdownItem disabled>Action</DropdownItem>
    //       <DropdownItem>Another Action</DropdownItem>
    //       <DropdownItem divider />
    //       <DropdownItem><Link className="logoutcss" to="/logout">Logout</Link></DropdownItem>
    //     </DropdownMenu>
    //   </Dropdown>
    //   </NavItem>

    } else {
      authBtn = <Fragment>
          <NavLink to="/login">Login <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
          <NavLink to="/signup" className="p-l-10">Sign Up <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></NavLink>
        </Fragment>
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