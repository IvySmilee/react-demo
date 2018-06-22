
/*组建类模块*/
import React,{Component} from 'react'
import logo from './logo.svg'
import './index.css'

export default class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到React！</h1>
        </header>
      </div>
    )
  }
}

