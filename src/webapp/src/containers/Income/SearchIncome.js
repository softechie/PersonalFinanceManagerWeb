import React from 'react'
import { Row, Col } from 'reactstrap'

import api from '../../api'
import SearchBar from '../../components/SearchBar'
import IncomeCard from '../../components/Income/IncomeCard'

class SearchIncome extends React.Component {
  constructor(props) {
    super(props)

    //TODO: Remove hard coded test data from state
    this.state = {
      incomeList: [],
      search: ""
    }
  }

  componentWillMount() {
    //TODO: get data from api and update state
    api.get('/income/all')
      .then(res => {
        console.log(res)
        this.setState({
          incomeList: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = () => {
    console.log("submitted")
    //TODO: submit search query to api and get data and update state
    if(this.state.search !== "") {
      api.get(`/income/search/${this.state.search}`)
        .then(res => {
          console.log(res)
          if(res.status === 200) {
            this.setState({
              incomeList: res.data
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
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