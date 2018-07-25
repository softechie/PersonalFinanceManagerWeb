import React from 'react'
import { Row, Col } from 'reactstrap'
import ViewSettingsCom from '../../components/Settings/ViewSettings'


class ViewSettings extends React.Component {
  constructor() {
    super()

    this.state = {
      settingsData: {
        emailId: 'asda',
        currency: 'asd'
      }
    }
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
              <ViewSettingsCom settingsData={this.state.settingsData}>

              </ViewSettingsCom>
          </div>
        </Col>
      </Row>
    )
  }
}




export default ViewSettings