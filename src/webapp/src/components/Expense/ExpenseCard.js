import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'

import { getFormatedDate } from '../../helper'

const ExpenseCard = (props) => {
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.expense.expense_name}
            <i className="fa fa-money m-l-30 text-success" aria-hidden="true"></i> <i className="fa fa-inr fs-13" aria-hidden="true"></i>{props.expense.expense_amount}
            <i className="fa fa-credit-card m-l-30 text-warning" aria-hidden="true"></i> {props.expense.expense_type}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {getFormatedDate(props.expense.expense_date)}
          </span>
          <span>
            <Link to={`/income/edit/${props.expense.expense_id}`}>
              <i id={`incomeEdit_${props.expense.expense_id}`} className="fa fa-pencil icon-btn text-warning" aria-hidden="true"></i>
            </Link>
            <i id={`incomeDelete_${props.expense.expense_id}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`incomeEdit_${props.expense.expense_id}`}>
              Edit
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target={`incomeDelete_${props.expense.expense_id}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.expense.created_date)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.expense.updated_date)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default ExpenseCard