import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import SearchBar from '../../components/SearchBar'
import IncomeCard from '../../components/Income/IncomeCard'
import DeleteModal from '../../components/DeleteModal'

class SearchIncome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      incomeDeleteModal: false,
      deleteIncomeId: ''
    }
  }

  componentWillMount() {
    //Dispatching get all action
    this.props.getIncomeList()
  }

  toggle = () => {
    this.setState({
      incomeDeleteModal: !this.state.incomeDeleteModal
    })
  }

  handleGetIncomeId = (incomeId) => {
    this.setState({
      incomeDeleteModal: true,
      deleteIncomeId: incomeId
    })
  }

  handleDelete = () => {
    this.setState({
      incomeDeleteModal: false
    })
    api.delete(`/income/delete/${this.state.deleteIncomeId}`)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.successToast('Successfully deleted')
          this.props.getIncomeList()
      })
      .catch(err => {
        console.log(err)
        this.props.dangerToast('Error occurred while deleting data')
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
              return <IncomeCard key={income.incomeId}
                                 income={income}
                                 match={this.props.match}
                                 getIncomeId={this.handleGetIncomeId}>
                      </IncomeCard>
            })}
          </div>
        </Col>
        <DeleteModal modalState={this.state.incomeDeleteModal}
                     modalToggle={this.toggle}
                     modalAction={this.handleDelete}
                     modalTitle="Delete Income"
                     modalBody="Are you sure you want to delete?">
        </DeleteModal>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  income: state.incomeReducer
})

const mapDispatchToProps = dispatch => ({
  getIncomeList: () => dispatch(actions.getAllIncome()),
  searchIncome: (incomeKey) => dispatch(actions.searchIncome(incomeKey)),
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchIncome)