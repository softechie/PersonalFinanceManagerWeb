import React from 'react'
import { Row, Col } from 'reactstrap'

import api from '../../api'
import IncomeFieldsCard from '../../components/Income/IncomeFieldsCard'

class EditIncome extends React.Component {
  constructor() {
    super()

    //initial state for edit income
    this.state = {
      incomeData: {
        incomeAmount: "",
        incomeType: "salary",
        incomeDate: ""
      }
    }
  }

  componentWillMount() {
    console.log(this.props.match.params.incomeId)
    //TODO: get data from api and update state
    api.get(`/income/${this.props.match.params.incomeId}`)
      .then(res => {
        console.log(res)
        this.setState({
          incomeData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
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
      api.post('/income/edit', this.state.incomeData)
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
            <IncomeFieldsCard title="Edit Income"
                              submitName="Update"
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

export default EditIncome