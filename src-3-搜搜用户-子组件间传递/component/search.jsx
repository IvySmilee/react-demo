import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PunSub from 'pubsub-js'

export default class Search extends Component{
  static propTypes={
    setSearchName:PropTypes.func.isRequired
  };
  search=()=>{
    const searchName=this.refs.searchName.value;
    if(searchName){
      // this.props.setSearchName(searchName);
      //发布消息：search
      PunSub.publish('search',searchName);
    }
  };
  render (){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref="searchName" placeholder="enter the name you search" />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}