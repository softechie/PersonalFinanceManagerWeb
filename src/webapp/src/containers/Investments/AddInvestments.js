import React from 'react'
import { Row, Col } from 'reactstrap'
import api from '../../apiController'
import InvestmentsFieldsCard from '../../components/Investments/InvestmentsFieldsCard'

class AddInvestments extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.investmentsDate = new Date(values.investmentsDate)
    api.put('/investments/new', values)
      .then(res => {
        this.props.history.push('/investments/all')
      })
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <InvestmentsFieldsCard title="Add Investment"
                                   submitName="Add"
                                   onSubmit={this.handleSubmit}>
            </InvestmentsFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

export default AddInvestments