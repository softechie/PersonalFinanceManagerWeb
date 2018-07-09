import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import SearchBar from '../../components/SearchBar'
import BankAccountCard from '../../components/BankAccount/BankAccountCard'

class SearchBankAccount extends React.Component {
  componentWillMount() {
    //Dispatching get all action
    this.props.getBankAccountList()
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.searchBankAccount(values.search)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search bank account..."
                       onSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <div className="block-content">
            {this.props.bankAccount.bankAccountList.map(bankAccount => {
              return <BankAccountCard key={bankAccount.bankAccountId} bankAccount={bankAccount} match={this.props.match}></BankAccountCard>
            })}
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  bankAccount: state.bankAccountReducer
})

const mapDispatchToProps = dispatch => ({
  getBankAccountList: () => dispatch(actions.getAllBankAccount()),
  searchBankAccount: (bankAccountKey) => dispatch(actions.searchBankAccount(bankAccountKey))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchBankAccount)