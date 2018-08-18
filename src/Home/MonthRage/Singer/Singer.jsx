import React, { Component } from 'react';
import { Layout, Icon, Menu, Input } from 'antd';
import { variable } from '../../../Overall/Overall';
import {Route,Link,Redirect} from 'react-router-dom';
import SingerSc from './Singer.scss';//header scss文件
import './Singer.css'; //header css文件s
import SingerComponent from './SingerComponent/SingerComponent'
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;
class Singer extends Component {

  constructor() {
    super();
    this.state = {
      SingerList: [],
      test:'你好'
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
  }

  getSingerList() {
    let res = require('../../../lib/json/Singer.json');
    // console.log(res)
  return res.data.map((item, i) => {
      return <MenuItemGroup key={i} title={item.title} style={{color:'pink'}}>
                {item.children.map((ele, key) => {
                  return <Menu.Item key={i+ele}>{ele}</Menu.Item>
                })}
             </MenuItemGroup>

    })
    
  }
  componentDidMount() {
    this.getSingerList();
  }
  render() {
    return (
      <div className="Singer" style={{ height: variable.tab1 }}>
        <Layout style={{ height: '100%' }}>

          <Sider style={{ background: '#fff', maxWidth: 200, minWidth: 200, height: '100%', width: 200 }}>
            <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: 170, height: 25, textAlign: 'center', marginLeft: '8px', marginTop: '4px' }}
            />
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', maxWidth: 190, minWidth: 190, width: 190 }}//160
            >
              <SubMenu key="sub1" title={<span><span>全部歌手</span></span>}>
                {this.getSingerList()}
              </SubMenu>

            </Menu>
          </Sider>
          <Layout>
            {/* <Header>Header</Header> */}
            <Content style={{ height: '100%' }}>
            <SingerComponent  name={this.state.test}  />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Singer;