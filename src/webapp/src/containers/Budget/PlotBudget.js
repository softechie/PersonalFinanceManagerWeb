import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import api from '../../api/api'
import { getFormatedDateForApi } from '../../helper'
import BudgetFieldsCard from '../../components/Budget/BudgetFieldsCard'
import _ from 'lodash';

class PlotBudget extends React.Component {

  constructor () {
    super()
    this.state = { 
    				rawdata: [],
    				expensedata: [],
    				incomedata: [],
    				investmentdata: [],
    				plotdata: [],
			    	title: ""
    			 }
    this.renderObjects = this.renderObjects.bind(this);
    this.processObjects = this.processObjects.bind(this);
  }

  componentWillMount() {
  }
  
  handleSubmit = (values) => {
    console.log(values)
    
    //converting into datatime format
    values.fromExpenseDate = getFormatedDateForApi(values.fromExpenseDate)
    values.toExpenseDate = getFormatedDateForApi(values.toExpenseDate)
    this.props.getBudgetList(values)
    
    console.log("API Success")
    console.log(this.props.budgetList) 
    
    this.processObjects(); 	
	this.setState({ plotdata: this.state.expensedata });
    //this.setState({ plotdata: [[Date.UTC(2018,7,2),1500], [Date.UTC(2018,7,15),2200], [Date.UTC(2018,7,31),600], [Date.UTC(2018,7,31),800]] })
	
    this.setState({ title: values.budgetType })
    //this.setState({ rawdata: res.data })
    
//    api.post('/budget/plot', values)
//      .then(res => {
//        if(res.status === 200){
	          //this.props.successToast('Successfully retrieved the budget')
	          //this.props.history.push('/budget/all')
	          //this.setState({ plotdata: [[Date.UTC(2018,7,2),1500], [Date.UTC(2018,7,15),2200], [Date.UTC(2018,7,31),600], [Date.UTC(2018,7,31),800]] })
	          //this.setState({ title: values.budgetType })
	          //this.setState({ rawdata: res.data })
	          //console.log("API Success")
	          //console.log(res.data)
//	     }
//      })
//      .catch(err => {
//        console.log(err)
//        this.props.dangerToast('Error occurred while retrieving the budget data')
//      })
  }


  render() {
	 
		const options = {  
				  rangeSelector: {
			            allButtonsEnabled: true,
			            buttons: [{
			                type: 'month',
			                count: 3,
			                text: 'Day',
			                dataGrouping: {
			                    forced: true,
			                    units: [['day', [1]]]
			                }
			            }, {
			                type: 'year',
			                count: 1,
			                text: 'Week',
			                dataGrouping: {
			                    forced: true,
			                    units: [['week', [1]]]
			                }
			            }, {
			                type: 'all',
			                text: 'Month',
			                dataGrouping: {
			                    forced: true,
			                    units: [['month', [1]]]
			                }
			            }],
			            buttonTheme: {
			                width: 60
			            },
			            selected: 2
			        },			
	  chart: { type: 'column' },
	  title: {text: this.state.title + " chart" },
	  xAxis: { 
	          title: { text: 'datetime'},
			  type: 'datetime',
			  dateTimeLabelFormats: {
			    day: "%e-%b",
			    month: "%b '%y",
			    year: "%Y"
			  }
	  },
	  yAxis: { 
	        title: { text: 'Amount'}
	  },
	 series: [ { 
		 showInLegend: false,
		 data: this.state.plotdata 
		 } ]
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


          <div>
          <h6>Budget List - Summary </h6>
          <ul className="list-group">
             {this.renderObjects()}   
          </ul>

        </div>

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

  processObjects() {
	  
       _.map(this.props.budgetList, object => {
		 var exp = [object.created_date, object.expense_amount];
		 var income = [object.createdDate, object.incomeAmount];
		 var invest = [object.createdDate, object.investmentsAmount];
		 
	   if (object.expense_id != null)
		   {  
		   	this.setState({ expensedata:[...this.state.expensedata], exp });
		   }
		   
	   if (object.incomeId != null) 
		   {
		   this.setState({ incomedata:[...this.state.incomedata], income });
		   }
	   
	   if (object.investmentsId != null) 
		   {
		   this.setState({ investmentdata:[...this.state.investmentdata], invest});		   
		   }
  });
       console.log("Processed Objects - expense");
       console.log(this.state.expensedata);
 	  // console.log(this.state.incomedata);
 	  //console.log(this.state.investmentdata);

}
  
  renderObjects() {
	  console.log("Render Objects");
	  console.log(this.props.budgetList);
	   return _.map(this.props.budgetList, object => {
   		   //console.log(object);
		   if (object.expense_id != null) 
			   return ( <li className="list-group-item" key={object.expense_id}>
		           		Expense | {object.created_date } |{object.expense_amount}
		           		</li> );
		   else if (object.investmentsId != null) 
			   return ( <li className="list-group-item" key={object.investmentsId}>
		           		Investment |{object.createdDate } |{object.investmentsAmount}
		           		</li> );
		   else if (object.incomeId != null) 
			   return ( <li className="list-group-item" key={object.incomeId}>
		           		Income | {object.createdDate } |{object.incomeAmount}
		           		</li> );
	   });
  }
}

const mapStateToProps = state => ({
	  budgetList: state.budgetReducer.budgetList
})

const mapDispatchToProps = dispatch => ({
  getBudgetList: (budgetDetails) => dispatch(actions.getAllBudget(budgetDetails)),
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(mapStateToProps, mapDispatchToProps) (PlotBudget)
