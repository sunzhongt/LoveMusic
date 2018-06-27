import React, { Component } from 'react';
import {variable} from '../../../Overall/Overall';
import RecommendSc from './Recommend.scss';//header scss文件
import  './Recommend.css'; //header css文件
import $ from 'jquery';
import { Button,Row,Col,Icon ,Pagination } from 'antd';
// import datas from '../../../lib/json/RecommendXinGeList.json';
class  Recommend extends Component {
  constructor(){
    super()
    this.state={
      dataList:[]
    }
  }
  render() {
    return (
      <div className={RecommendSc.Recommend} style={{height:variable.tab1}}>
         {/* 新推荐 */}
         <Row>
           <Col span={12} style={{height:'100%'}}>
            <h3 style={{ borderBottom:'1px #ccc solid',paddingBottom:'4px' }}>新歌首发</h3>
            <div className={RecommendSc.XinGebox}>
               <div className={RecommendSc.XinGe}>
                   {
                    this.state.dataList.map(item=>{
                      return <li key={item.id} className={RecommendSc.libox}>
                        <Row>
                           <Col span={12}>
                             <span className={RecommendSc.textTitle}>
                               {item.text} 
                             </span>
                             
                           </Col>
                           <Col span={12}>
                              <span  className={RecommendSc.textState} > 
                                {item.isExclusive?
                                <span>独家</span>:
                                  <span>专辑</span>} 
                              </span>
                              <span className={RecommendSc.time}>
                                {
                                  item.Time.substring(10,15)
                                }
                              </span>
                              <Icon type="caret-right" className={RecommendSc.IHover}  title="播放"/>
                              <Icon type="plus-square-o" className={RecommendSc.IHover} title="添加到歌单"/>
                              <Icon type="download" className={RecommendSc.IHover} title="下载歌曲"/>
                           </Col>
                        </Row>
                          
                          
                      </li>
                    })
                   }
               </div>
            </div>
     
            <Button icon="play-circle-o" style={{float:'right',margin:'10px' }}>全部播放</Button>
            <Pagination size="small" total={50} style={{marginTop:'100px' }}/>
           </Col>
           <Col span={12}>
            <h3>新碟上架 <span>更多</span></h3>
            <div className={RecommendSc.XinDiebox}>
               <div className={RecommendSc.XinDie}>
                <Row>
                  <Col span={12}>
                      <img className={RecommendSc.imgT} src={require('../../../lib/images/XinDei001.jpg')} alt=""/>
                      <p className={RecommendSc.p}><span>怪咖</span> 薛之谦</p>
                  </Col>
                  <Col span={12}>
                     <img  className={RecommendSc.imgT} src={require('../../../lib/images/XinDei002.jpg')} alt=""/>
                     <p className={RecommendSc.p}><span>爱潮不花钱</span> JJ</p>
                  </Col>
                  <Col span={12}>
                    <img className={RecommendSc.imgT} src={require('../../../lib/images/Xindei004.jpg')} alt=""/> 
                    <p className={RecommendSc.p}><span>创造101</span> C++</p>
                  </Col>
                  <Col span={12}>
                  <img  className={RecommendSc.imgT} src={require('../../../lib/images/XinDei002.jpg')} alt=""/>
                  <p className={RecommendSc.p}><span>爱潮不花钱</span> JJ</p>
                  </Col>
                </Row>
               </div>
            </div>
           </Col>
         </Row>
          {/* 歌曲方向按钮列表 */}
         <Row className={RecommendSc.GDT} style={{paddingTop:'10px',borderTop:'1px #ccc solid'}}>
           
            <Col span={3}>
               <Button type="dashed">嗨爆DJ</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">怀旧经典</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">洗脑电音</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">车载音乐</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">网络红歌</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">伤心情歌</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">无损音乐</Button>
            </Col>
            <Col span={3}>
               <Button type="dashed">心灵福音</Button>
            </Col>
         </Row>
         {/* 精选单歌 */}
         <Row>
           <Col span={6} className={RecommendSc.box}>
           <span className={RecommendSc.imgD}>ddd</span>
              <img style={{width:'100%',height:'150px',padding:'10px',fontSize:'0'}}  src={require('../../../lib/images/Sp001.jpg')} alt=""/>
           </Col>
           <Col span={6}>
             <img style={{width:'100%',height:'150px',padding:'10px',fontSize:'0'}} src={require('../../../lib/images/Sp002.jpg')} alt=""/>
           </Col>
           <Col span={6}>
           <img  style={{width:'100%',height:'150px',padding:'10px',fontSize:'0'}} src={require('../../../lib/images/Sp003.jpg')} alt=""/>
           </Col>
           <Col span={6}>
           <img style={{width:'100%',height:'150px',padding:'10px',fontSize:'0'}} src={require('../../../lib/images/Sp004.jpg')} alt=""/>
           </Col>
         </Row>

      </div>
    );
  }
  componentWillMount=()=>{
     this.GetXinGeList();
  }
 GetXinGeList(){
        const {data} = require('../../../lib/json/RecommendXinGeList.json');
        this.setState({
          dataList:data
        })
  
  }
}

export default  Recommend;