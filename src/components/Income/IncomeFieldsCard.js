import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input, Button } from 'reactstrap'

const IncomeFieldsCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Label for="incomeAmount">Amount</Label>
                <Input type="number"
                       name="incomeAmount"
                       id="incomeAmount"
                       placeholder="Eg: 2000"
                       value={props.incomeFieldValue.incomeAmount}
                       onChange={props.incomeFieldChange}>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Label for="incomeType">Catagory</Label>
                <Input type="select"
                       name="select"
                       id="incomeType"
                       value={props.incomeFieldValue.incomeType}
                       onChange={props.incomeFieldChange}>
                  <option value="salary">Salary</option>
                  <option value="gift">Gift</option>
                  <option value="other">Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Label for="incomeDate">Date</Label>
                <Input type="date"
                       name="incomeDate"
                       id="incomeDate"
                       placeholder="date placeholder"
                       selected={props.incomeFieldValue.incomeDate}
                       onChange={props.incomeFieldChange}>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" className="text-center">
              <Button color="primary" onClick={props.incomeFieldSubmit}>{props.submitName}</Button>
            </Col>
          </Row>
      </CardBody>
    </Card>
  )
}

IncomeFieldsCard.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  incomeFieldValue: PropTypes.object.isRequired,
  incomeFieldChange: PropTypes.func.isRequired,
  incomeFieldSubmit: PropTypes.func.isRequired
}

export default IncomeFieldsCard