import React from 'react'
import { Row, Col } from 'reactstrap'
import api from '../../api'
import InvestmentsFieldsCard from '../../components/Investments/InvestmentsFieldsCard'

class AddInvestments extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.investmentsDate = new Date(values.investmentsDate)
    api.put('/investments/new', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.history.push('/investments/all')
      })
      .catch(err => {
        console.log(err)
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