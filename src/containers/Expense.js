import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import API from '../baseUrl';
import ExpenseCard from '../components/Expense/ExpenseCard'
import ExpenseFieldsCard from '../components/Expense/ExpenseFieldsCard'
import { getFormatedDateForApi } from '../helper'

class Expense extends Component{
    
    constructor() {
        super();
    
        this.state = {
          expenseData : [],
          expenseAddData : {
              login_id : "1",
              expense_name : "",
              expense_amount : "",
              expense_type : "Card",
              expense_date : "",
              create_by : "Suresh",
              upd_by : "Suresh"
          }
        }
      }
    
      componentDidMount() {

        API.get('v1/expense/all/1')
        .then(res=>{
            const expenseData = res.data;
            this.setState({ expenseData });
            console.log(this.state.expenseData);
        })
      }

      handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const expenseAddData = this.state.expenseAddData
        if(name==='expense_date'){
            expenseAddData[name] =  getFormatedDateForApi(new Date(value))
        }else{
            expenseAddData[name] = value
        }
        
        this.setState({
            expenseAddData: expenseAddData
        })
      }

      handleSubmit = () => {

        const expenseAdd = this.state.expenseAddData
        console.log(expenseAdd)

        API.put('v1/expense/new', expenseAdd)
        .then(res=>{
            console.log("Status Code :: "+res.status);
            this.componentDidMount()
            this.render()
        })
        //TODO: submit data to api
      }

    render(){
        return (
            <Row>
                <Col>
                    <ExpenseFieldsCard title="Add Expense"
                                    submitName="Add"
                                    expenseFieldValue={this.state.expenseAddData}
                                    expenseFieldChange={this.handleChange}
                                    expenseFieldSubmit={this.handleSubmit}>
                    </ExpenseFieldsCard>
                    <Row><Col></Col></Row>
                
              <div className="block-content">
                {this.state.expenseData.map(expense => {
                    return <ExpenseCard key={expense.expense_id} expense={expense} match={this.props.match}></ExpenseCard>
                })}
              </div>
            </Col>
          </Row>
        )
    } 

}

export default Expense;