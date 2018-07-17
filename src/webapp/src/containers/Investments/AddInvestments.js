import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import InvestmentsFieldsCard from '../../components/Investments/InvestmentsFieldsCard'

class AddInvestments extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.investmentsDate = new Date(values.investmentsDate)
    api.put('/investments/new', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.successToast('Successfully added')
          this.props.history.push('/investments/all')
      })
      .catch(err => {
        console.log(err)
        this.props.dangerToast('Error occurred while adding data')
      })
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <InvestmentsFieldsCard title="Add Investment"
                                   submitName="Add"
                                   onSubmit={this.handleSubmit}>
            </InvestmentsFieldsCard>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(null, mapDispatchToProps) (AddInvestments)