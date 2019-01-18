import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PlotBudget from '../containers/Budget/PlotBudget'

const BudgetRoutes = (props) => {
  return (
    <Switch>
      <Route path={`${props.match.url}/plot`} component={PlotBudget}></Route>
    </Switch>
  )
}

export default BudgetRoutes;
