import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import SearchBar from '../../components/SearchBar'
import IncomeCard from '../../components/Income/IncomeCard'

class SearchIncome extends React.Component {
  componentWillMount() {
    //Dispatching get all action
    this.props.getIncomeList()
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.searchIncome(values.search)
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar placeholder="search income..."
                       onSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <div className="block-content">
            {this.props.income.incomeList.map(income => {
              return <IncomeCard key={income.incomeId} income={income} match={this.props.match}></IncomeCard>
            })}
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  income: state.incomeReducer
})

const mapDispatchToProps = dispatch => ({
  getIncomeList: () => dispatch(actions.getAllIncome()),
  searchIncome: (incomeKey) => dispatch(actions.searchIncome(incomeKey))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchIncome)