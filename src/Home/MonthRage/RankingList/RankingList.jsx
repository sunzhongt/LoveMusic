import React, { Component } from 'react';
import { Layout, Menu,  Icon ,Row,Col} from 'antd';
import {variable} from '../../../Overall/Overall';
import $ from 'jquery';
import RankingListSc from './RankingList.scss';//header scss文件
import  './RankingList.css'; //header css文件
import RankingListContent from  './RankingListContent/RankingListContent' ;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class  RankingList extends Component {
  constructor(){
    super();
    this.state={
      aa:"参数",
      dd:{
        a:1,
        b:'22'
      },
      dataLish:{}
    }
  }
  render() {
    return (
      <div className="RankingList" style={{height:variable.tab1}}>
         <Layout style={{ padding: '24px 0', background: '#fff',height:'100%' }}>
        <Sider width={200} style={{ background: '#fff',maxWidth: 179,minWidth: 179,height:'100%', width: 179 }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%',  maxWidth: 160,minWidth: 160, width: 160  }}
          >

          
          <SubMenu key="sub1" title={<span style={{paddingLeft:'20px'}}>热门榜单</span>} >
              <Menu.Item key="1" style={{paddingLeft: '20px'}}>
                {/* <span className={RankingListSc.icon}>
                    <img src={require('../../../lib/images/icon/icon001.png')} alt=""/>
                </span>
                <h4>爱音乐排行榜</h4> */}
                {this.state.dataLish.MaxlistCount}
              </Menu.Item>
            </SubMenu>
          
         
          </Menu>
        </Sider>
        <Content style={{ padding: '0 1px ', height:'100%' }}>
            <RankingListContent {...this.state.dd}/>
        </Content>
      </Layout>
      </div>
    );
  }
  componentDidMount(){
    this.GetRankingList()
    $('.RankingList .ant-layout-sider.ant-layout-sider-dark').css({height:'100%', maxWidth: '179px',minWidth: '179px', width: '179px'});
    $('.RankingList .ant-menu-item').css({paddingLeft:'10px'})
  }
  // 请求
 GetRankingList=()=>{
  const data= require('../../../lib/json/RankingList.json')
  this.setState({
     dataLish:data
  })

}
}


export default  RankingList;