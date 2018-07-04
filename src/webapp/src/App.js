import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes/pageRoutes'

import { Container, Row, Col } from 'reactstrap'

import NavigationBar from './components/NavigationBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
