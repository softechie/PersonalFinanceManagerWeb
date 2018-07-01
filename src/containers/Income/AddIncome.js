import React from 'react'
import { Row, Col } from 'reactstrap'

import api from '../../api'
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
    console.log(event.target.value)
    const value = event.target.value
    const name = event.target.name
    const incomeData = this.state.incomeData
    if(name === "incomeDate")
      incomeData[name] = value ? new Date(value) : ""
    else
      incomeData[name] = value

    this.setState({
      incomeData: incomeData
    })
  }

  handleSubmit = () => {
    console.log(this.state.incomeData)
    //TODO: submit data to api
    if(this.state.incomeData.incomeAmount !== ""
       && this.state.incomeData.incomeDate !== "") {
      api.put('/income/new', this.state.incomeData)
        .then(res => {
          console.log(res)
          if(res.status === 200)
            this.props.history.push('/income/all')
        })
        .catch(err => {
          console.log(err)
        })
    }
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