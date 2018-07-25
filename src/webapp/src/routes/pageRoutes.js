import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Income from '../containers/Income'
import Expense from '../containers/Expense'
import Investments from '../containers/Investments'
import BankAccount from '../containers/BankAccount'
import Login from '../containers/Login';
import RegisterUser from '../containers/RegisterUser';
import Settings from '../containers/Settings'
const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/income" component={Income}></Route>
      <Route path="/expense" component={Expense}></Route>
      <Route path="/investments" component={Investments}></Route>
      <Route path="/bankAccount" component={BankAccount}></Route>
      <Route path="/registerUser" component={RegisterUser}></Route>
      <Route path="/settings" component={Settings}></Route>
    </Switch>
  )
}

export default PageRoutes;