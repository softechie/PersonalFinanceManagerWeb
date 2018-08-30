import React, { Component } from 'react'

import { Router } from 'react-router-dom'
import { history } from './helper'
import PageRoutes from './routes/pageRoutes'

import { Container, Row, Col } from 'reactstrap'

import NavigationBar from './containers/NavigationBar'
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';

import { connect } from 'react-redux'
import * as actions from './actions'

class App extends Component {
  componentWillMount() {
    let keycloakInst = this.props.keycloak
    keycloakInst.init({onLoad: 'check-sso'}).then(authenticated => {
      console.log("In App component "+ authenticated)
      this.props.updateKeycloak(keycloakInst)
      if(authenticated)
        history.push('/income/all')
    })
  }

  render() {
    return (
      <Router history={history}>
        <Container fluid={true} className="container__main">
          <Row>
            <Col>
              <div className="wrap">
                <NavigationBar></NavigationBar>
                <div className="content">
                  <PageRoutes></PageRoutes>
                </div>
              </div>
            </Col>
          </Row>
          <NotificationsSystem theme={theme} />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  keycloak: state.userReducer.keycloak
})

const mapDispatchToProps = dispatch => ({
  updateKeycloak: (keycloak) => dispatch(actions.updateKeycloak(keycloak))
})

export default connect(mapStateToProps, mapDispatchToProps) (App)
