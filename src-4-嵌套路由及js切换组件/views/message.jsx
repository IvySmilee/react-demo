import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component{
  state={
    messages:[]
  };

  componentDidMount(){
    //模拟发送异步请求获取数据
    this.intervalId=setTimeout(()=>{
      const messages=[
        {id:1,title:'message01'},
        {id:2,title:'message02'},
        {id:3,title:'message03'}
      ];
      this.setState({
        messages
      })
    },1000)
  };
  componentWillUnmount(){
    clearTimeout(this.intervalId);
  };
  showDetail=(id)=>{
    //使用js实现路由跳转
    this.props.history.push('/home/message/'+id);
  };
  //替换查看，不能回退
  showDetail2=(id)=>{
    this.props.history.replace('/home/message/'+id);
  };
  render(){
    return (
      <div>
        <ul>
          {
            this.state.messages.map((m,index)=>(
              <li key={index}>
                {/*显示的消息为一般连接形式*/}
                <Link to={'/home/message/'+m.id}>{m.title}</Link>

                {/*当回调函数需要传入特别的参数时，需要用匿名函数包起来，点击时执行*/}
                <button onClick={()=>{this.showDetail(m.id)}}>push查看</button>
                <button onClick={()=>{this.showDetail2(m.id)}}>replace查看</button>
              </li>
            ))
          }
        </ul>
        {/*点击回退：goBack()，go(-1)，前进：go(1),前进一步：goForward()*/}
        <p>
          <button onClick={()=>{this.props.history.goBack()}}>回退</button>
          <button onClick={()=>{this.props.history.goForward()}}>前进</button>
        </p>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    )
  }
}