import React from 'react'
import { Row, Col } from 'reactstrap'

import SearchBar from '../../components/SearchBar'
import IncomeCard from '../../components/Income/IncomeCard'

class SearchIncome extends React.Component {
  constructor(props) {
    super(props)

    //TODO: Remove hard coded test data from state
    this.state = {
      incomeList: [
        {
          'incomeId': 'kjfhsdf43453',
          'incomeAmount': 2000.00,
          'incomeType': 'Savings',
          'incomeDate': '2018-05-28',
          'createdBy': '3423jkhkdf',
          'updatedBy': '3423jkhkdf',
          'isDelete': false,
          'createdDate': '2018-05-28',
          'updatedDate': '2018-05-28'
        },
        {
          'incomeId': 'hgfh45345345',
          'incomeAmount': 2500.00,
          'incomeType': 'Gift',
          'incomeDate': '2018-05-22',
          'createdBy': '3423jkhkdf',
          'updatedBy': '3423jkhkdf',
          'isDelete': false,
          'createdDate': '2018-05-22',
          'updatedDate': '2018-05-22'
        }
      ],
      search: ""
    }
  }

  componentWillMount() {
    //TODO: get data from api and update state
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = () => {
    console.log("submitted")
    //TODO: submit search query to api and get data and update state
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="block-search">
            <SearchBar searchName="search income..."
                       searchValue={this.state.search}
                       searchChange={this.handleChange}
                       searchSubmit={this.handleSubmit}>
            </SearchBar>
          </div>
          <div className="block-content">
            {this.state.incomeList.map(income => {
              return <IncomeCard key={income.incomeId} income={income} match={this.props.match}></IncomeCard>
            })}
          </div>
        </Col>
      </Row>
    )
  }
}

export default SearchIncome