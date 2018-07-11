import React from 'react'
import PropTypes from 'prop-types'
import InputText from './Inputs/InputText'
import { Row, Col,CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const LoginForm=(props)=>{
 
    return (

        <Col xs="12" sm="6" md="4" className="m-align">
       
          <CardBody >
              <Row>
              <FormGroup >
              <Col xs="12" className="text-center">
            <CardTitle >{props.title}</CardTitle>
            </Col>
            </FormGroup>
            <form onSubmit={props.handleSubmit}>
            <FormGroup >
            <Row>
            <label  className="mr-sm-2">Email</label>
                <Field  id="email"
                       type="email"
                       name="emailId"
                       placeholder="Enter your email"
                       validate={[required,email]}
                       component={InputText}>
                </Field>
                </Row>
                </FormGroup>

  <FormGroup >
  <Row>
<label  className="mr-sm-2">Password</label>
                <Field id="password"
                       type="password"
                       name="password"
                       placeholder="Enter password"
                      
                       component={InputText}>
                </Field>
                
                </Row>
              
              </FormGroup>
             
              
          <Row>    
        <Button color="primary"  type="submit">{props.submitName}</Button>
        
        <Button color="primary" className="m-l-20"  type="submit">{props.submitName1}</Button>
       
        <Button color="primary" className="m-t-10" className="m-l-25">Forgot password?</Button>

       </Row>
      </form>
      </Row>
</CardBody>

    </Col>
    
   
);


}

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'loginForm',
    }
  )(LoginForm)