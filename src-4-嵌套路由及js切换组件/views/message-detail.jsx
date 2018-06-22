import React,{Component} from 'react'

const messagesDetails=[
  {id:1,title:'message01',content:'message content01'},
  {id:2,title:'message02',content:'message content02'},
  {id:3,title:'message03',content:'message content03'}
];

export default class MessageDetail extends Component{
  render(){
    /*向路由传递query.param数据*/
    //获取。。。的id，并且转换成数值
    const id=this.props.match.params.id*1;
    //在数组中查找包含md的项，
    const md=messagesDetails.find((md,index)=>md.id===id);
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{md.title}</li>
        <li>Message:{md.content}</li>
      </ul>
    )
  }
}