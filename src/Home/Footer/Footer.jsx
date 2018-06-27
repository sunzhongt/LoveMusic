import React, { Component } from 'react';
import { Row, Col,Icon,Slider, Switch } from 'antd';
import FooterSc from './Footer.scss';//引入scss
import MusicTitle from '../../lib/images/musictitle.jpg';
import './Footer.css';//引入css
class Footer extends Component {
  constructor(){
    super();
    this.state={
      disabled: false,
    }
  }
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
  render() {
    return (
      <div className={FooterSc.Footer}>
          <Row>
            <Col span={3}>
              <div className={FooterSc.itmeBox+'  '+FooterSc.itmeOne}>
                    <Row>
                        <Col span={8} >
                           <Icon type="step-backward" /> 
                        </Col>
                        <Col span={8}>
                           <Icon type="caret-right"  /> 
                        </Col>
                        <Col span={8} >
                           <Icon type="step-forward" />
                        </Col>
                    </Row>
              </div>
               
            </Col>
            <Col span={3}>
               <span className={FooterSc.S}>
                 歌手：燕学亮  歌名：奔跑吧 花椒
               </span>
               <img src={MusicTitle}alt="" className={FooterSc.MusicTitleimg}/>
            </Col>
            <Col span={7} style={{padding:'9px',boxSizing:'border-box'}}>
               <ul className={FooterSc.itmeTwo}>
                   <li>
                     <Row>
                         <Col span={15} style={{ textAlign:'left' }}>
                            <span className={FooterSc.MusicQuality}>标准<Icon type="caret-up"  style={{fontSize:'9px'}}/></span>
                             <span className={FooterSc.MusicTitle}>燕学亮 —— 奔跑吧，花椒</span>
                          </Col>
                         <Col span={9}  style={{ textAlign:'right' }}>
                           <span className={FooterSc.MusicTitle}>00:00/01:23</span> 
                         </Col>
                     </Row>
                   </li>
                   <li style={{paddingTop:'9px',boxSizing:'border-box'}}>
                      <Slider defaultValue={30} disabled={this.state.disabled} style={{padding:0,margin:0 ,paddingTop:'4px' }}/>
                    </li>
               </ul>
            </Col>
            <Col span={10}>
               <Row>
                 <Col span={3}><Icon type="heart-o"  className={FooterSc.footerI} title="收藏"/></Col>
                 <Col span={3}><Icon type="download" className={FooterSc.footerI} title="下载"/></Col>
                 <Col span={3}><Icon type="ellipsis" className={FooterSc.footerI} title="更多"/></Col>
                 <Col span={3}><Icon type="retweet" className={FooterSc.footerI}  title="循环播放"/></Col>
                 <Col span={3}><Icon type="sound" className={FooterSc.footerI}  title="音量"/></Col>
                 <Col span={3} style={{lineHeight:'66px'}}><span className={FooterSc.music} title="3D丽音">●音效</span></Col>
                 <Col span={3} style={{lineHeight:'62px'}}><span className={FooterSc.musicCi} title="歌词">词</span></Col>
                 <Col span={3}><Icon type="message"  className={FooterSc.footerI} title="查看评论"/></Col>
             
               </Row>
            </Col>
         </Row>
      </div>
    );
  }
}

export default  Footer;