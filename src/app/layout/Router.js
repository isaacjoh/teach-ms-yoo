import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './../Home'
import Resume from './../Resume'
import BlendedLearning from './../BlendedLearning'
import Recommendations from './../Recommendations';
import Workshop from '../Workshop';
import CGIMath from '../CGIMath';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/resume' component={Resume}/>
    <Route path='/recommendations' component={Recommendations}/>
    <Route path='/blended-learning' component={BlendedLearning}/>
    <Route path='/workshop' component={Workshop}/>
    <Route path='/cgi-math' component={CGIMath}/>
  </Switch>
)
export default Router
