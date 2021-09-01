import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from '../components/Form/Form'
import Main from '../components/Main/Main'
import Pictures from '../components/Pictures/Pictures'
import Page404 from '../components/Page404/Page404'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/form" exact component={Form} />
      <Route path="/pictures" exact component={Pictures} />
      <Route component={Page404} />
    </Switch>
  )
}
