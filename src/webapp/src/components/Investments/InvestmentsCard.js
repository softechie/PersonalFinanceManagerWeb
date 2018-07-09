import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, UncontrolledTooltip  } from 'reactstrap'
import { getFormatedDate } from '../../helper'

const InvestmentsCard = (props) => {
  return (
    <Card className="m-b-5">
      <CardBody>
        <CardText className="flex-sb-m">
          <span>
            <i className="fa fa-bookmark-o text-primary" aria-hidden="true"></i> {props.investments.investmentsType}
            <i className="fa fa-money m-l-30 text-success" aria-hidden="true"></i> <i className="fa fa-inr fs-13" aria-hidden="true"></i>{props.investments.investmentsAmount}
            <i className="fa fa-calendar m-l-30 text-info" aria-hidden="true"></i> {getFormatedDate(props.investments.investmentsDate)}
          </span>
          <span>
            <Link to={`/investments/edit/${props.investments.investmentsId}`}>
              <i id={`investmentsEdit_${props.investments.investmentsId}`} className="fa fa-pencil icon-btn text-warning" aria-hidden="true"></i>
            </Link>
            <i id={`investmentsDelete_${props.investments.investmentsId}`} className="fa fa-trash-o icon-btn m-l-15 text-danger" aria-hidden="true"></i>
            <UncontrolledTooltip placement="top" target={`investmentsEdit_${props.investments.investmentsId}`}>
              Edit
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target={`investmentsDelete_${props.investments.investmentsId}`}>
              Delete
            </UncontrolledTooltip>
          </span>
        </CardText>
        <CardText className="flex-sb-m">
          <small className="text-muted">Created on: {getFormatedDate(props.investments.createdDate)}</small>
          <small className="text-muted">Last updated: {getFormatedDate(props.investments.updatedDate)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

InvestmentsCard.propTypes = {
  investments: PropTypes.object.isRequired
}

export default InvestmentsCard