import React from 'react'
import { Row, Col, Jumbotron } from 'reactstrap'

class Home extends React.Component {
  render() {
		 

    return (
      <Row>
        <Col>
          <div className="wrap__home">
            <Jumbotron>
              <h1>Welcome to Personal Finance Manager</h1>
            </Jumbotron>
          </div>

        </Col>
      </Row>
    )
  }
}

export default Home