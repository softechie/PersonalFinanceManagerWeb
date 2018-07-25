import React from 'react'
import PropTypes from 'prop-types'
import InputText from './Inputs/InputText'
import { Row, Col,Card,CardBody,size,order,offset,CardTitle,Nav,NavLink, FormGroup,NavItem, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const LoginForm=(props)=>{
 
    return (
    
<Col xs="12" sm={{ size: 12, offset: 4 }} md="6" className="m-align">

            <h2 className="text-center">{props.title}</h2>
<form  onSubmit={props.handleSubmit}>
            <FormGroup>
           <Field  id="email"
                       type="email"
                       name="emailId"
                       placeholder="Enter your email"
                       validate={[required,email]}
                       component={InputText}>
                </Field>
               </FormGroup>
  
<FormGroup>
                <Field id="password"
                       type="password"
                       name="password"
                       placeholder="Enter password"
                       validate={required}
                       component={InputText}>
                </Field>
                </FormGroup>
   <Row>
    <Col sm={{ size: 'auto', offset: 1 }} className="m-align">  
  <Button color="primary"  type="submit">{props.submitName}</Button>
  </Col>  
{/* <Col sm={{ size: 'auto', offset: 1 }}><Nav>
          <NavLink href="/">Forgot password?</NavLink>
          </Nav> </Col> */}
        </Row>
    </form>
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