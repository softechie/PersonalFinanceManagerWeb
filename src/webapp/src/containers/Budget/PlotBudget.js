import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
//import SearchBar from '../../components/SearchBar'
import ValueBar from '../../components/ValueBar'
import api from '../../api/api'
import { getFormatedDateForApi } from '../../helper'
import BudgetFieldsCard from '../../components/Budget/BudgetFieldsCard'
import BudgetCard from '../../components/Budget/BudgetCard'

class PlotBudget extends React.Component {

  constructor () {
    super()
    this.state = { data: [] }
  }

  handleSubmit = (values) => {
    console.log(values)
    //converting into datatime format
    values.fromExpenseDate = getFormatedDateForApi(values.fromExpenseDate)
    values.toExpenseDate = getFormatedDateForApi(values.toExpenseDate)
    api.post('/budget/plot', values)
      .then(res => {
        console.log(res.data)
        if(res.status === 200)
          this.props.successToast('Successfully retrieved the budget')
          //this.props.history.push('/budget/all')
		  this.setState({ data: [[Date.UTC(2013,5,2),0.7695], [Date.UTC(2013,5,3),0.7648], [Date.UTC(2013,5,24),0.7623]] })
      })
      .catch(err => {
        console.log(err)
        this.props.dangerToast('Error occurred while retrieving the budget data')
      })
  }

  render() {
	const options = {  
	  title: {text: 'My stock chart'  },
	  series: [{ data: this.state.data }] // [[Date.UTC(2013,5,2),0.7695], [Date.UTC(2013,5,3),0.7648], [Date.UTC(2013,5,24),0.7623]] }] //
	};

    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <BudgetFieldsCard title="Plot Budget"
                              submitName="Submit"
                              onSubmit={this.handleSubmit}>
            </BudgetFieldsCard>
          </div>
          <ValueBar title="Total Income"
                    color="success"
                    value="4000">
          </ValueBar>
          <div className="block-content">
		  <HighchartsReact
			highcharts={Highcharts}
			constructorType={'chart'}
			options={options}
		  />
          </div>

        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getBudgetList: () => dispatch(actions.getAllBudget()),
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(null, mapDispatchToProps) (PlotBudget)
