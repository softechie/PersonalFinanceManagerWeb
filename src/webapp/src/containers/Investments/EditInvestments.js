import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import InvestmentsFieldsCard from '../../components/Investments/InvestmentsFieldsCard'

class EditInvestments extends React.Component {
  componentWillMount() {
    console.log(this.props.match.params.investmentsId)
    this.props.getInvestments(this.props.match.params.investmentsId)
  }

  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.investmentsDate = new Date(values.investmentsDate)
    api.post('/investments/edit', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.successToast('Successfully updated')
          this.props.history.push('/investments/all')
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
            <InvestmentsFieldsCard title="Edit Investment"
                                   submitName="Update"
                                   initialValues={this.props.investmentsEditData}
                                   onSubmit={this.handleSubmit}>
            </InvestmentsFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  investmentsEditData: state.investmentsReducer.investmentsEditData
})

const mapDispatchToProps = dispatch => ({
  getInvestments: (investmentsId) => dispatch(actions.getInvestments(investmentsId)),
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(mapStateToProps, mapDispatchToProps) (EditInvestments)