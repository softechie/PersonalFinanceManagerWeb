import React from 'react'
import { Row, Col } from 'reactstrap'
import API from '../api/apiController'
import { getFormatedDateForApi } from '../../helper'
import ExpenseFieldsCard from '../../components/Expense/ExpenseFieldsCard'

class AddExpense extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    // converting into datatime format
    values.expense_date = getFormatedDateForApi(values.expense_date)
    API.put('/expense/new', values)
      .then(res => {
        console.log(res)
        if(res.status === 201)
          this.props.history.push('/expense/all')
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
            <ExpenseFieldsCard title="Add Expense"
                                submitName="Add"
                                onSubmit={this.handleSubmit}>
            </ExpenseFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

export default AddExpense