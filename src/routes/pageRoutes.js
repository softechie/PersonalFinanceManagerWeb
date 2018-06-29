import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Income from '../containers/Income'
import Expense from '../containers/Expense'

const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/income" component={Income}></Route>
      <Route path="/expense" component={Expense}></Route>
    </Switch>
  )
}

export default PageRoutes;