import React,{Component} from 'react'
import Add from '../add/add'
import List from '../list/list'


export default class App extends Component{
  // 给组件对象(App的实例)设置(添加)属性
  state={
    comments:[
      {username:'Tom',content:'react学不会啊！'},
      {username:'Jack',content:'我也不会啊~'},
    ]
  };
  //定义添加评论函数,参数是新增的评论，通过props传入Add组件
  addComment=(comment)=>{
    const {comments}=this.state;
    comments.unshift(comment);
    //更新状态
    this.setState({
      comments
    })
  };
  //定义删除评论函数，参数是要删除的第几个评论，通过props传入List组件
  deleteComment=(index)=>{
    const {comments}=this.state;
    comments.splice(index,1);
    this.setState({
      comments
    })
  };
  render (){
    const {comments}=this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}
