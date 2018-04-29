import React from 'react'

import AnimatedRouteWrapper from './../AnimatedRouteWrapper'

import Home from './../Home'
import Resume from './../Resume'
import BlendedLearning from './../BlendedLearning'
import Recommendations from './../Recommendations';
import Workshop from '../Workshop';
import CGIMath from '../CGIMath';

const Router = () => (
  <div>
    <AnimatedRouteWrapper exact path='/' component={Home}/>
    <AnimatedRouteWrapper path='/resume' component={Resume}/>
    <AnimatedRouteWrapper path='/recommendations' component={Recommendations}/>
    <AnimatedRouteWrapper path='/blended-learning' component={BlendedLearning}/>
    <AnimatedRouteWrapper path='/workshop' component={Workshop}/>
    <AnimatedRouteWrapper path='/cgi-math' component={CGIMath}/>
  </div>
)
export default Router
