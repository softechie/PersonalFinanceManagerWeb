import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'
import { getFormatedDate } from '../../helper'

const BankAccountCard = (props) => {
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.bankAccount.accountNumber}
            <i className="fa fa-money m-l-30 text-success" aria-hidden="true"></i> <i className="fa fa-inr fs-13" aria-hidden="true"></i>{props.bankAccount.accountHolderName}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {props.bankAccount.accountType}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {props.bankAccount.bankName}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {props.bankAccount.ifscCode}
          </span>
          <span>
            <i id={`bankAccountDelete_${props.bankAccount.bankAccountId}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`bankAccountDelete_${props.bankAccount.bankAccountId}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.bankAccount.createdDate)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.bankAccount.updatedDate)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

BankAccountCard.propTypes = {
  bankAccount: PropTypes.object.isRequired
}

export default BankAccountCard