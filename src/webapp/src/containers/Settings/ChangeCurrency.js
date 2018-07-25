import React from 'react'
import { Row, Col } from 'reactstrap'

import UpdateCurrency from '../../components/Settings/UpdateCurrency'

class ChangeCurrency extends React.Component {
  

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <UpdateCurrency title="Select Currency"
                              submitName="Update"
                              onSubmit={this.handleSubmit}>
            </UpdateCurrency>
          </div>
        </Col>
      </Row>
    )
  }
}




export default ChangeCurrency