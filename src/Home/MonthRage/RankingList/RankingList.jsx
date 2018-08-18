import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { variable } from '../../../Overall/Overall';
import $ from 'jquery';
import RankingListSc from './RankingList.scss';//header scss文件
import './RankingList.css'; //header css文件
import RankingListContent from './RankingListContent/RankingListContent';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class RankingList extends Component {
  constructor() {
    super();
    this.state = {
      aa: "参数",
      dd: {
        a: 1,
        b: '22'
      },
      dataLish: {},
      propsDataID:1
    }
  }
  render() {
    let aaa = 1;
    return (
      <div className="RankingList" style={{ height: variable.tab1 }}>
        <Layout style={{ padding: '24px 0', background: '#fff', height: '100%' }}>
          <Sider width={200} style={{ background: '#fff', maxWidth: 200, minWidth: 200, height: '100%', width: 200 }}>{/*179 */}
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', maxWidth: 190, minWidth: 190, width: 190 }}//160
              onSelect={({ item, key, selectedKeys }) => this.SelectProps({ item, key, selectedKeys })}
            >
              {
                this.state.dataLish.Maxlist.map((itme, i) => {
                  return <SubMenu key={'sub' + aaa++} title={<span style={{ paddingLeft: '20px' }}>{itme}</span>} >
                    {
                      this.state.dataLish.MinlistData.map((element, index) => {
                        if (element.name === itme) {
                          return element.data.map((y, x) => {
                            return <Menu.Item key={y.ID} ref="antItme" >
                              <span className={RankingListSc.icon}>
                                <img src={y.IconUrl} alt='' />
                              </span>
                              <h4>{y.titles}</h4>
                            </Menu.Item>
                          })
                        } else {
                          return false
                        }
                      })
                    }
                  </SubMenu>
                })
              }
            </Menu>
          </Sider>
          <Content style={{ padding: '0 1px ', height: '100%' }}>
            <RankingListContent ID={this.state.propsDataID} />
          </Content>
        </Layout>
      </div>
    );
  }
  GetRankingList = () => {
    const data = require('../../../lib/json/RankingList.json')
    this.setState({
      dataLish: data
    })

  }

  // 选择传参
  SelectProps = (porps) => {
    this.setState({
      propsDataID: porps.key
    })
  }
  componentWillMount() {
    this.GetRankingList();
  }
  componentDidMount() {
    $('.RankingList .ant-layout-sider.ant-layout-sider-dark').css({ height: '100%', maxWidth: '200px', minWidth: '200px', width: '200px' });
  }


}


export default RankingList;