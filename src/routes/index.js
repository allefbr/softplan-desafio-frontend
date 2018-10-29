import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router'

import Home from '../containers/Home'
import Search from '../containers/Search'
import Details from '../containers/Details'
import DetailsList from '../containers/Details/list'
import NoFound from '../containers/NotFound'

const routes = (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />      
      <Route path="/buscar/:termo" component={Search} />      
      <Route path="/detalhes/:termo/:id" component={Details} />
      <Route path="/detalhes/:termo" component={DetailsList} />
      <Route component={NoFound} />
    </Switch>
  </Fragment>
)

export default routes