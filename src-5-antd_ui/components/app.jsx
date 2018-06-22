import React,{Component} from 'react'
import {Button,Toast} from 'antd-mobile'

export default class App extends Component{
  handleClick=()=>{
    Toast.success('马云宣布')
  };
  render(){
    return (
      <Button type='primary' onClick={this.handleClick}>antd-mobile测试</Button>
    )
  }
}
