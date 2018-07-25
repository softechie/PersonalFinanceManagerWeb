import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'

import InputText from '../Inputs/InputText'

import { Field, reduxForm } from 'redux-form'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const UpdatePassword = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">{props.title}</CardTitle>
        <form onSubmit={props.handleSubmit}>
          <Row>
          <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="NewPassword"
                       type="text"
                       name="NewPassword"
                       title="New Password"
                       component={InputText}>
                </Field>
              </FormGroup>
           </Col>
           <Col xs="12" sm="6" lg="4">
              <FormGroup>
                <Field id="ConfirmPassword"
                       type="text"
                       name="ConfirmPassword"
                       title="Confirm Password"
                       component={InputText}>
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

UpdatePassword.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'currencyForm',
  enableReinitialize: true,
  initialValues: {
    passwordType: 'password'
  }
})(UpdatePassword)