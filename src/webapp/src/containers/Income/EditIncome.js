import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import IncomeFieldsCard from '../../components/Income/IncomeFieldsCard'

class EditIncome extends React.Component {
  componentWillMount() {
    console.log(this.props.match.params.incomeId)
    this.props.getIncome(this.props.match.params.incomeId)
  }

  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.incomeDate = new Date(values.incomeDate)
    api.post('/income/edit', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.successToast('Successfully updated')
          this.props.history.push('/income/all')
      })
      .catch(err => {
        console.log(err)
        this.props.dangerToast('Error occurred while updating data')
      })
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <IncomeFieldsCard title="Edit Income"
                              submitName="Update"
                              initialValues={this.props.incomeEditData}
                              onSubmit={this.handleSubmit}>
            </IncomeFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  incomeEditData: state.incomeReducer.incomeEditData
})

const mapDispatchToProps = dispatch => ({
  getIncome: (incomeId) => dispatch(actions.getIncome(incomeId)),
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(mapStateToProps, mapDispatchToProps) (EditIncome)