import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import BankAccountFieldsCard from '../../components/BankAccount/BankAccountFieldsCard'

class AddBankAccount extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.bankAccountDate = new Date(values.bankAccountDate)
    api.put('/bankAccount/new', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.successToast('Successfully added')
          this.props.history.push('/bankAccount/all')
      })
      .catch(err => {
        console.log(err)
        this.props.dangerToast('Error occurred while adding data')
      })
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <BankAccountFieldsCard title="Add Bank Account"
                                   submitName="Add"
                                   onSubmit={this.handleSubmit}>
            </BankAccountFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(null, mapDispatchToProps) (AddBankAccount)