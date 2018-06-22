import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {
  //对A对的组件上props的属性进行限定
  static proptypes={
    addComment:PropTypes.func.inRequired
  };
  //点击按钮添加评论的事件函数
  addComment=()=>{
    //获取输入框的用户名和品论内容
    const username=this.refs.username.value.trim();
    const content=this.refs.content.value.trim();
    //获取评论后清除两个输入框的内容
    this.refs.username.value='';
    this.refs.content.value='';
    if(!username || !content){
      return;
    }
    //把获取到的内容封装成comment对象
    const comment={
      username,
      content
    };
    //调用属性函数addComment(),传入新产生的comment
    this.props.addComment(comment);
  };

  render (){
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref="username" type="text" className="form-control" placeholder="用户名"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref="content" className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}