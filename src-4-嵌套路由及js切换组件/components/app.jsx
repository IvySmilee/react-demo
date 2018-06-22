import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from '../views/about'
import Home from '../views/home'
import MyNavLink from './my-nav-link'

/*
路由链接: NavLink
注册路由: Route
ctrl+shift+f  format
*/

export default class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*指定路由链接，类似于a超链接，to后为连接到的指定路由的路径*/}
              <MyNavLink className='list-group-item' to="/about">About</MyNavLink>
              <MyNavLink className='list-group-item' to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*显示路由组件的位置*/}
                <Switch>{/*只显示当前匹配的某个路由组件*/}
                  {/*前端路由，path为路径，component为对应的组件*/}
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  {/*默认显示的路由组件*/}
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}