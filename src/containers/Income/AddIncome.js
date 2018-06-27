import React from 'react'
import { Row, Col } from 'reactstrap'

import IncomeFieldsCard from '../../components/Income/IncomeFieldsCard'

class AddIncome extends React.Component {
  constructor() {
    super()

    //initial state for add income
    this.state = {
      incomeData: {
        incomeAmount: "",
        incomeType: "salary",
        incomeDate: ""
      }
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    const incomeData = this.state.incomeData
    incomeData[name] = value

    this.setState({
      incomeData: incomeData
    })
  }

  handleSubmit = () => {
    console.log(this.state.incomeData)
    //TODO: submit data to api
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <IncomeFieldsCard title="Add Income"
                              submitName="Add"
                              incomeFieldValue={this.state.incomeData}
                              incomeFieldChange={this.handleChange}
                              incomeFieldSubmit={this.handleSubmit}>
            </IncomeFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

export default AddIncome