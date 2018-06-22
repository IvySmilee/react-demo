import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Main extends Component{
    static propTypes={
        searchName:PropTypes.string.isRequired
    };
    state={
        firstView:true,
        loading:true,
        users:[],
        errorMsg:''
    };
    // 父组件传入一个新的prop数据
    componentWillReceiveProps (newProps) {
       const searchName=newProps.searchName;
       //更新状态：请求中
       this.setState({
         firstView:false,
         loading:true
       })
       //发送ajax请求
       const url = `https://api.github.com/search/users?q=${searchName}`
       axios.get(url)
         .then(res=>{
            //成功了，更新状态：成功
            const result=res.data;
            const users=result.items.map(item=>({
                url:item.html_url,
                avatarUrl:item.avatar_url,
                name:item.login
            }))
            this.setState({
               loading:false,
               users
            });
            console.log(this.state.users)
         })
         .catch(err=>{
            //失败了，更新状态：失败
            this.setState({
                loading:false,
                errorMsg:'请求失败'
            })
         })
    };
    render(){
       const {firstView, loading, users, errorMsg}=this.state;
       console.log(users);
       if(firstView){
          return <h2>请输入关键字搜索{this.props.searchName}</h2>
       }else if(loading){
          return <h2>正在搜索中...</h2>
       }else if(errorMsg){
          return <h2>{errorMsg}</h2>
       }else{
          return (
            <div className="row">
              {
                users.map((user,index)=>(
                  <div className="card" key={index}>
                      <a href={user.url} target="_blank">
                        <img alt='' src={user.avatarUrl} style={{width: 100}}/>
                      </a>
                      <p className="card-text">{user.name}</p>
                  </div>
                ))
              }
            </div>
          )
       }
    }

}