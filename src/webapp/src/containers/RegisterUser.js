import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
// import { Row, Col, Card, CardBody } from 'reactstrap'
// import Steps, { Step } from 'rc-steps'
import * as actions from '../actions'
// import RegisterUserForm from '../components/Register/RegisterUserForm'
// import ActivateUserForm from '../components/Register/ActivateUserForm'

class RegisterUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      regValues: {}
    }
  }

  componentWillMount() {
    let keycloakInst = this.props.keycloak
    keycloakInst.init({onLoad: 'check-sso'}).then(authenticated => {
      this.props.updateKeycloak(keycloakInst)
      if(authenticated) {
        this.props.history.push('/')
        // keycloakInst.loadUserInfo()
        // .then(keycloakProfile => {
        //   let profile = {
        //     emailId: keycloakProfile.email,
        //     firstName: keycloakProfile.given_name,
        //     lastName: keycloakProfile.family_name
        //   }
        //   this.props.updateKeycloakUser(profile)
        // })
      }
      else
        keycloakInst.register()
    })
  }

  // handleRegisterSubmit = (values) => {
  //   this.setState({
  //     regValues: { emailId: values.emailId }
  //   })
  //   this.props.registerUser(values)
  // }

  // handleActivationSubmit = (values) => {
  //   this.props.activateUser(values)
  // }

  render() {
    // let stepData
    // if(this.props.stepDetails.currentStep === 0) {
    //   stepData = 
    //     <RegisterUserForm submitName="Register"
    //                       onSubmit={this.handleRegisterSubmit}>
    //     </RegisterUserForm>
    // } else {
    //   stepData = 
    //     <ActivateUserForm submitName="Activate"
    //                       initialValues={this.state.regValues}
    //                       onSubmit={this.handleActivationSubmit}>
    //     </ActivateUserForm>
    // }
    return (
      <Row>
        {/* <Col xs="12" sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }} className="m-align">
          <Card>
            <CardBody>
              <h2 className="text-center">Personal Finance Manager Sign Up</h2>
              <Steps current={this.props.stepDetails.currentStep} className="p-t-20 p-b-20" status={this.props.stepDetails.stepError ? 'error': 'process'}>
                <Step title="Enter details" />
                <Step title="Verifiy" />
              </Steps>
              { stepData }
            </CardBody>
          </Card>
        </Col> */}
        <h4>Redirecting...</h4>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  // stepDetails: state.userReducer.stepDetails,
  keycloak: state.userReducer.keycloak
})

const mapDispatchToProps = dispatch => ({
  updateKeycloak: (keycloak) => dispatch(actions.updateKeycloak(keycloak)),
  updateKeycloakUser: (profile) => dispatch(actions.updateKeycloakUser(profile))
  // registerUser: (registerDetails) => dispatch(actions.registerUser(registerDetails)),
  // activateUser: (activationDetails) => dispatch(actions.activateUser(activationDetails))
})

export default connect(mapStateToProps, mapDispatchToProps) (RegisterUser)
  
