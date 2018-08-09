import React, { Component } from 'react';

import ClassificationSc from './Classification.scss';//header scss文件
import  './Classification.css'; //header css文件
import { Button } from 'antd';
class  Classification extends Component {
  constructor(){
    super();
    this.state={
         http:this.__proto__.$http
    }
  }
  render() {
    return (
      <div className="Classification">
         <header>Classification</header>
      </div>
    );
  }

  componentWillMount() {
    this.__proto__.$http.get('/ProductServer.ashx?pageSize=20&pageNumber=1',{
     params:{
      Method:'GetSelectProudctCategory'
      // method: 'ADDBillAccessRequest'
     }
    }).then((res)=>{
         console.log(res)
    })
  }
  componentDidMount() {

  }

}

export default  Classification;