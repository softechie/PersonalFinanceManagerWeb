import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Income from '../containers/Income'

const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/income" component={Income}></Route>
    </Switch>
  )
}

export default PageRoutes;