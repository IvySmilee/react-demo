import React,{Component} from 'react'


export default class News extends Component{
  state={
    newsArr:['1','2','3','4']
  };
  render(){
    return (
      <ul>
        {
          this.state.newsArr.map((news,index)=><li key={index}>{news}</li>)
        }
      </ul>
    )
  }
}