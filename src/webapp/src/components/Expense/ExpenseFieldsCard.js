import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input, Button } from 'reactstrap'

const ExpenseFieldsCard = (props) => {
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
          <Row>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
                <Label for="expense_name">Expense Name</Label>
                <Input type="text" name="expense_name" id="expenseName" placeholder="Eg: Food or Shopping Expenses" 
                  value={props.expenseFieldValue.expense_name} onChange={props.expenseFieldChange}>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
                <Label for="expense_amount">Expense Amount</Label>
                <Input type="number" name="expense_amount" id="expenseAmount" placeholder="Eg: 500" 
                  value={props.expenseFieldValue.expense_amount} onChange={props.expenseFieldChange}>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
                <Label for="expenseType">Expense Type</Label>
                <Input type="select" name="expense_type" id="expenseType"
                       value={props.expenseFieldValue.expense_type} onChange={props.expenseFieldChange} selected={props.expenseFieldValue.expense_type}>
                       
                  <option value="Card">Card</option>
                  <option value="Cash">Cash</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <FormGroup>
                <Label for="expenseDate">Expense Date</Label>
                <Input type="date"
                       name="expense_date"
                       id="expenseDate"
                       placeholder="date placeholder"
                       selected={props.expenseFieldValue.expense_date}
                       onChange={props.expenseFieldChange}>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" className="text-center">
              <Button color="primary" onClick={props.expenseFieldSubmit}>{props.submitName}</Button>
            </Col>
          </Row>
      </CardBody>
    </Card>
  )
}

ExpenseFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  expenseFieldValue: PropTypes.object.isRequired,
  expenseFieldChange: PropTypes.func.isRequired,
  expenseFieldSubmit: PropTypes.func.isRequired
}

export default ExpenseFieldsCard