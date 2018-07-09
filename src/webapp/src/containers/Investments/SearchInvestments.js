import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import SearchBar from '../../components/SearchBar'
import InvestmentsCard from '../../components/Investments/InvestmentsCard'
import DeleteModal from '../../components/DeleteModal'

class SearchInvestments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      investmentsDeleteModal: false,
      deleteInvestmentsId: ''
    }
  }

  componentWillMount() {
    //Dispatching get all action
    this.props.getInvestmentsList()
  }

  toggle = () => {
    this.setState({
      investmentsDeleteModal: !this.state.investmentsDeleteModal
    })
  }

  handleGetInvestmentsId = (investmentsId) => {
    this.setState({
      investmentsDeleteModal: true,
      deleteInvestmentsId: investmentsId
    })
  }

  handleDelete = () => {
    this.setState({
      investmentsDeleteModal: false
    })
    api.delete(`/investments/delete/${this.state.deleteInvestmentsId}`)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.getInvestmentsList()
      })
      .catch(err => {
        console.log(err)
      })
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
              return <InvestmentsCard key={investments.investmentsId}
                                      investments={investments}
                                      match={this.props.match}
                                      getInvestmentsId={this.handleGetInvestmentsId}>
                      </InvestmentsCard>
            })}
          </div>
        </Col>
        <DeleteModal modalState={this.state.investmentsDeleteModal}
                     modalToggle={this.toggle}
                     modalAction={this.handleDelete}
                     modalTitle="Delete Investment"
                     modalBody="Are you sure you want to delete?">
        </DeleteModal>
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