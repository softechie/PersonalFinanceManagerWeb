import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api'
import IncomeFieldsCard from '../../components/Income/IncomeFieldsCard'

class AddIncome extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.incomeDate = new Date(values.incomeDate)
    api.put('/income/new', values)
      .then(res => {
        console.log(res)
        if(res.status === 200)
          this.props.successToast('Successfully added')
          this.props.history.push('/income/all')
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
            <IncomeFieldsCard title="Add Income"
                              submitName="Add"
                              onSubmit={this.handleSubmit}>
            </IncomeFieldsCard>
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

export default connect(null, mapDispatchToProps) (AddIncome)