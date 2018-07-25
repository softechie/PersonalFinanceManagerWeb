import React from 'react'
import { Row, Col } from 'reactstrap'

import UpdatePassword from '../../components/Settings/UpdatePassword'

class ChangePassword extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
          <UpdatePassword title="Update Password"
                              submitName="Update"
                              onSubmit={this.handleSubmit}>
            </UpdatePassword>
          </div>
        </Col>
      </Row>
    )
  }
}




export default ChangePassword