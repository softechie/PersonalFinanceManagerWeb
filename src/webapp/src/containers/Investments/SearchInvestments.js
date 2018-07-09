import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import SearchBar from '../../components/SearchBar'
import InvestmentsCard from '../../components/Investments/InvestmentsCard'

class SearchInvestments extends React.Component {
  componentWillMount() {
    //Dispatching get all action
    this.props.getInvestmentsList()
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.searchInvestments(values.search)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search investments..."
                       onSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <div className="block-content">
            {this.props.investments.investmentsList.map(investments => {
              return <InvestmentsCard key={investments.investmentsId} investments={investments} match={this.props.match}></InvestmentsCard>
            })}
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  investments: state.investmentsReducer
})

const mapDispatchToProps = dispatch => ({
  getInvestmentsList: () => dispatch(actions.getAllInvestments()),
  searchInvestments: (investmentsKey) => dispatch(actions.searchInvestments(investmentsKey))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchInvestments)