import React from 'react'
import { Row, Col } from 'reactstrap'
import api from '../../apiController'
import BankAccountFieldsCard from '../../components/BankAccount/BankAccountFieldsCard'

class AddBankAccount extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.bankAccountDate = new Date(values.bankAccountDate)
    api.put('/bankAccount/new', values)
      .then(res => {
        this.props.history.push('/bankAccount/all')
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

export default AddBankAccount