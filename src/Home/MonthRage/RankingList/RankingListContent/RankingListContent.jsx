import React, { Component } from 'react';

import RankingListContentSc from './RankingListContent.scss';//header scss文件
import  './RankingListContent.css'; //header css文件
import { Button } from 'antd';
class  RankingListContent extends Component {
    constructor(){
        super();
        this.state={
            aa:'222'
        }
    }
  render() {
    return (
      <div className="RankingListContent">
         <header>RankingListContent</header>
         {this.props.a}
      </div>
    );

  }
  componentWillMount(){
      console.log(this.props.sss)
  }
  componentDidMount(){

  }
}

export default  RankingListContent;