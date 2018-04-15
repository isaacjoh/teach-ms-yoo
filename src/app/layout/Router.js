import React from 'react'

import AnimatedRouteWrapper from './../AnimatedRouteWrapper'

import Home from './../Home'
import Resume from './../Resume'
import Accomplishments from './../Accomplishments'

const Router = () => (
  <div>
    <AnimatedRouteWrapper exact path='/' component={Home}/>
    <AnimatedRouteWrapper path='/resume' component={Resume}/>
    <AnimatedRouteWrapper path='/accomplishments' component={Accomplishments}/>
  </div>
)
export default Router
