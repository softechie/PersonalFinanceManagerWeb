import React from 'react'
import PropTypes from 'prop-types'
import InputText from './Inputs/InputText'
import { Row, Col,CardBody, CardTitle, FormGroup, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)

const fname = value =>
  (value && !/^[A-Z._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)
	
const lname = value =>
  (value && !/^[A-Z._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)	
	
const mobnumber = value =>
  (value && !/^[0-9._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)	

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const RegisterUserForm=(props)=>{
 
    return (

        <Col xs="32" sm="6" md="4" className="m-align">
       
          <CardBody >
              <Row>
              <FormGroup >
              <Col xs="32" className="text-center">
            <CardTitle >{props.title}</CardTitle>
            </Col>
            </FormGroup>
            <form onSubmit={props.handleSubmit}>
            <FormGroup >
            <Row>
            <label  className="mr-sm-2">First Name</label>
                <Field  id="fname"
                       type="text"
                       name="fname"
                       placeholder="Enter your First Name"
                       validate={[required,fname]}
                       component={InputText}>
                </Field>
                </Row>
				
				<Row>
            <label  className="mr-sm-2">Last Name</label>
                <Field  id="lname"
                       type="text"
                       name="lname"
                       placeholder="Enter your Last Name"
                       validate={[required,lname]}
                       component={InputText}>
                </Field>
                </Row>
				
				<Row>
            <label  className="mr-sm-2">Mobile Number</label>
                <Field  id="mobnumber"
                       type="number"
                       name="mobnumber"
                       placeholder="Enter your Mobile Number"
                       validate={[required,mobnumber]}
                       component={InputText}>
                </Field>
                </Row>
				
				<Row>
            <label  className="mr-sm-2">Email</label>
                <Field  id="email"
                       type="email"
                       name="email"
                       placeholder="Enter your email"
                       validate={[required,email]}
                       component={InputText}>
                </Field>
                </Row>
				
				
                </FormGroup>

  <FormGroup >
  <Row width="100px">
<label  className="">Password</label>
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
		<Button color="primary"  type="submit">{props.submitName}</Button>        
        <Button color="primary" className="m-t-10" className="m-l-25">Forgot password?</Button>

       </Row>
      </form>
      </Row>
</CardBody>

    </Col>
    
   
);


}

RegisterUserForm.propTypes = {
  title: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
    form: 'registerUserForm',
    }
  )(RegisterUserForm)