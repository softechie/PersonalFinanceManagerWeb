import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import InputSelect from '../Inputs/InputSelect'

import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const UpdateCurrency = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="currencyType"
                       type="select"
                       name="currencyType"
                       title="Currency Catagory"
                       validate={required}
                       component={InputSelect}>
                  <option value="USD">USD</option>
                  <option value="AUD">AUD</option>
                  <option value="INR">INR</option>
                </Field>
              </FormGroup>
            </Col>
            <Col xs="12" className="text-center">
              <Button color="primary" type="submit">{props.submitName}</Button>
            </Col>
         </Row>
        </form>
      </CardBody>
    </Card>
  )
}

UpdateCurrency.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'currencyForm',
  enableReinitialize: true,
  initialValues: {
    currencyType: 'currency'
  }
})(UpdateCurrency)