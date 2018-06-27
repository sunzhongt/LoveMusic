import React, { Component } from 'react';
import {Route,NavLink ,Redirect} from 'react-router-dom';

import {Row,Col,Tabs } from 'antd';
import Recommend from './Recommend/Recommend';
import RankingList from './RankingList/RankingList';
import Singer from './Singer/Singer';
import Classification from './Classification/Classification';
import SingHi from './SingHi/SingHi';
import MonthRageSc from './MonthRage.scss';//引入scss
import './MonthRage.css';//引入css

const TabPane = Tabs.TabPane;

class  MonthRage extends Component {
  render() {
    return (
      <div className={MonthRageSc.MonthRage}>
           <nav className={MonthRageSc.nav}>
                {/* <Row>
                    <Col span={}>
                    </Col>
                </Row> */}
                    <Tabs defaultActiveKey="1" onChange={this.callback} >
                        <TabPane tab="乐库" key="1" >
                           <ul className={MonthRageSc.ul+' '+'clearfix'}>
                           <NavLink to="/Main/MonthRage/Recommend" activeStyle={{color:'orange'}} >推荐</NavLink>
                           <NavLink to="/Main/MonthRage/RankingList" activeStyle={{color:'orange'}}>排行榜</NavLink>
                           <NavLink to="/Main/MonthRage/Singer" activeStyle={{color:'orange'}}>歌手</NavLink>
                           <NavLink to="/Main/MonthRage/Classification" activeStyle={{color:'orange'}}>分类</NavLink>
                           <NavLink to="/Main/MonthRage/SingHi" activeStyle={{color:'orange'}}>嗨！唱起来</NavLink>
                           </ul>
                           <hr/>
                           <Route exact path="/Main/MonthRage" render={()=><Redirect to="/Main/MonthRage/Recommend" />}></Route>
                           <Route path="/Main/MonthRage/Recommend" component={Recommend}></Route>
                           <Route path="/Main/MonthRage/RankingList" component={RankingList}></Route>
                           <Route path="/Main/MonthRage/Singer" component={Singer}></Route>
                           <Route path="/Main/MonthRage/Classification" component={Classification}></Route>
                            {/* 乐库 */}
                        </TabPane>
                        <TabPane tab="电台" key="2" >电台</TabPane>
                        <TabPane tab="歌单" key="3" >歌单</TabPane>
                        <TabPane tab="MV" key="4" >MV</TabPane>
                        <TabPane tab="直播" key="5" >直播</TabPane>
                        <TabPane tab="KTV" key="6" >KTV</TabPane>
                        <TabPane tab="歌词" key="7" >歌词</TabPane>
                    </Tabs>
           </nav>
           
      </div>
    );
  }

//切换回调
//  callback(key) {
//     console.log(key);
//   }   
}

export default  MonthRage;