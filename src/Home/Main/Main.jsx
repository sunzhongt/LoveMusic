import $ from 'jquery';
import React, { Component } from 'react';
import MainSc from './Main.scss';// scss文件
import './Main.css'; // css文件
import headlogo from '../../lib/images/headlogo01.png';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import FontAwesome from 'react-fontawesome';
import {Route,Link,Redirect} from 'react-router-dom';
// 组件
import Search from '../Search/Search';//搜索音乐
import Find from '../Find/Find';//发现音乐
import MonthRage from '../MonthRage/MonthRage';//本月最火

import FooterComponent from '../Footer/Footer';//脚步播放器



const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class Main extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
      rootSubmenuKeys : ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub4'],
 
    }
  }
  render() {
    return (
      <Layout>
    <Header className="header"  style={{backgroundColor:'#A88BB9',height:'35px' ,position:'relative'}}>
  
         <img src={headlogo} alt="" style={{  height:'70%'}} className={MainSc.headlogo} />
    
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' ,backgroundColor:'#A88BB9'}}
        onSelect={({ item, key, selectedKeys })=>{ this.HeadSelecct({ item, key, selectedKeys }) }}
      >
        <Menu.Item key="logout">
        <Icon type="logout" />
             退出登录
        </Menu.Item>
        <Menu.Item key="3">
           <FontAwesome name='music' style={{ fontSize: "17px",marginRight:'10px' }}/>
             收藏
        </Menu.Item>
        <Menu.Item key="2"><Icon type="share-alt" />分享</Menu.Item>
        <Menu.Item key="1"><Icon type="user" />孙重涛</Menu.Item>
      </Menu>
    </Header>
    <Layout>
    <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark"
            defaultSelectedKeys={['1']} 
            mode="inline" 
            onSelect={({ item, key, selectedKeys })=>{ this.ItmeSelecct({ item, key, selectedKeys }) }}
            defaultOpenKeys={['sub1']}
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            >
            <Menu.Item key="/Main/MonthRage"  >
            <Icon type="area-chart" />
              <span>本月最火音乐</span>
            </Menu.Item> 
            <Menu.Item key="/Main/Search">
            <Icon type="search" />
              <span>搜索</span> 
            </Menu.Item>
            <Menu.Item key="/Main/Find">
            <Icon type="smile-o" />
              <span>发现音乐</span>
            </Menu.Item>
            <Menu.Item key="10" >
            <Icon type="star" />
              <span>排行榜</span>
            </Menu.Item> 
            <Menu.Item key="11" >
            <Icon type="heart" />
              <span>我喜欢的音乐</span>
            </Menu.Item> 
            <Menu.Item key="12" >
            <Icon type="clock-circle-o" />
              <span>最近播放</span>
            </Menu.Item> 
            <SubMenu
              key="sub10"
              title={<span> <Icon type="arrow-down" /><span>本地下载音乐</span></span>}
            >
              <Menu.Item key="3">生日快乐</Menu.Item>
              <Menu.Item key="4">哈利路亚</Menu.Item>
              <Menu.Item key="5">常常喜乐</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>关于</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      <Layout style={{ padding: '0 4px 0px' }}>
      
        <Content style={{ background: '#fff', padding: 24, margin: 0, height: "100%" }}>
            <Route exact path="/Main" render={()=><Redirect  to="/Main/MonthRage" />}></Route>
            <Route path="/Main/MonthRage"  component={MonthRage}></Route>
            <Route path="/Main/Search" component={Search}></Route>
            <Route path="/Main/Find" component={Find}></Route>
            
        </Content>
      </Layout>
    </Layout>
    <Footer style={{backgroundColor:'#fff'}}>
      <FooterComponent/>
    </Footer>
  </Layout>
    );
  }
   // 关合方法
   onCollapse = (collapsed) => {
    this.setState({ collapsed });
   }
   // 监听
   shouldComponentUpdate(){
    return true
   }
   componentDidUpdate(){
    if(this.state.collapsed){
      // $('.ant-menu-dark, .ant-menu-dark .ant-menu-sub').css({'color':'#7f7f7'})
      // $('.ant-menu-submenu.ant-menu-submenu-vertical').css({'color':'#7f7f7'})
        var title= document.querySelectorAll('.ant-menu-submenu-title')
        var dark= document.querySelectorAll('.ant-menu-dark')
        var itmes= document.querySelectorAll('.ant-layout-sider-children .ant-menu-item') 
        dark[1].style.backgroundColor="#F7F7F7"
        for(var i=0 ;i<title.length;i++){
            // title[i].style.color="#fff"
           
        }
        for(var i=0 ;i<itmes.length;i++){
          itmes[i].style.color="#000"
           
        }
    
    }
   }
   //右侧菜单
   ItmeSelecct(obj){
      this.props.history.push(obj.key);
   }  
   //顶部操作按钮
   HeadSelecct(obj){
     if(obj.key=="logout")
      this.props.history.push('/Login');
   } 
  //  防止多开
   onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
   }
}

export default Main;