import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import InputText from './Inputs/InputText'
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)
const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const RegisterUserForm = (props) => {
  return (
    <Row>
      <Col xs="12" sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }} className="m-align">
        <Card>
          <CardBody>
            <h2 className="text-center">{props.title}</h2>
            <form onSubmit={props.handleSubmit}>
              <FormGroup >
                <Field id="firstName"
                       type="text"
                       name="firstName"
                       title="First Name"
                       placeholder="Enter your First Name"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
              <FormGroup >
                <Field id="lastName"
                       type="text"
                       name="lastName"
                       title="Last Name"
                       placeholder="Enter your Last Name"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
              <FormGroup >
                <Field id="mobileNumber"
                       type="number"
                       name="mobileNumber"
                       title="Mobile Number"
                       placeholder="Enter your Mobile Number"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
              <FormGroup >
                <Field id="emailId"
                       type="email"
                       name="emailId"
                       title="Email"
                       placeholder="Enter your email"
                       validate={[required,email]}
                       component={InputText}>
                </Field>
              </FormGroup>
              <FormGroup >
                <Field id="password"
                       type="password"
                       name="password"
                       title="Password"
                       placeholder="Enter password"
                       validate={required}
                       component={InputText}>
                </Field>
              </FormGroup>
              <Row>
                <Col sm="12" className="m-align text-center">
                  <Button color="primary" type="submit">{props.submitName}</Button>
                  <Link to="/login" className="p-l-10">Login?</Link>
                </Col>
              </Row>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

RegisterUserForm.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'registerUserForm',
})(RegisterUserForm)