import React from 'react'
import { Row, Col } from 'reactstrap'
import api from '../../apiController'
import IncomeFieldsCard from '../../components/Income/IncomeFieldsCard'

class AddIncome extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.incomeDate = new Date(values.incomeDate)
    api.put('/income/new', values)
      .then(res => {
        this.props.history.push('/income/all')
      })
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <IncomeFieldsCard title="Add Income"
                              submitName="Add"
                              onSubmit={this.handleSubmit}>
            </IncomeFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

export default AddIncome