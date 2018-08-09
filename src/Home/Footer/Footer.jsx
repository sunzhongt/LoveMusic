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
      sumfileDate:'',
      audioPlayfileDate:'00:00:00',
      value:0,
      max:1,
    }
  }


  render() {
    return (
      <div className={FooterSc.Footer}>
        
          <Row>
            <Col span={3}>
              <div className={FooterSc.itmeBox+'  '+FooterSc.itmeOne+' '+'hehehe' }>
                    <Row>
                        <Col  span={8} >
                           <Icon  type="step-backward" /> 
                        </Col>
                        <Col span={8}>
                        <Icon type="caret-right" className="startBtn" onClick={()=>{
                            return this.isAudio();
                           }} />
                        </Col>
                        <Col span={8} >
                           <Icon   type="step-forward" />
                        </Col>
                    </Row>
              </div>
               
            </Col>
            <Col span={3}>
            <audio className="audio"  src={require('../../lib/musicFile/testMusic.mp3')}>
               您的浏览器不支持 audio 标签。
            </audio>
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
                           <span className={FooterSc.MusicTitle}>{this.state.audioPlayfileDate}</span>/<span  className={FooterSc.MusicTitle}>{this.state.sumfileDate}</span> 
                         </Col>
                     </Row>
                   </li>
                   <li style={{paddingTop:'9px',boxSizing:'border-box'}}>
                      <Slider disabled={false}  min={0} max={this.state.max} defaultValue={30} value={this.state.value} onChange={(value)=>{return this.onChange(value)}} onAfterChange={(value)=>{ return this.RonAfterChange(value) }}  style={{padding:0,margin:0 ,paddingTop:'4px' }}/>
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

  isAudio(){
    // console.log(this.__proto__.$)
    // console.log(this)
    // var $leftBtn=this.__proto__.$(this.refs.leftBtn); 
    var $startBtn= this.__proto__.$('.startBtn')[0]
                  
    var $audio=document.querySelector('audio');
    // var $rightBtn=this.__proto__.$(this.refs.rightBtn);
    // $startBtn.onclick=()=>{
        
    // }
    if($audio.paused){ //开启
      $audio.play();
      $startBtn.classList.toggle('anticon-pause');
    }else { //暂停
      $audio.pause();
      $startBtn.classList.toggle('anticon-pause');
      // <Icon type="pause" />
    }
  }

//************************* 
/**
 * 
 * 拉动条事件
 */
  RonAfterChange(value){
    var $audio=document.querySelector('audio');
    // console.log('RonAfterChange')
    // console.log(value)

    // $audio.currentTime=value/Math.ceil($audio.duration)
  }
  onChange(value){
    var $audio=document.querySelector('audio');
    console.log('onChange')
    console.log(value);
    $audio.currentTime=value/Math.ceil($audio.duration)*100
  }
// ************************8




  componentWillMount() {
    
  }

  // 总时间
  getSumDate(){
    var $audio=document.querySelector('audio');
    $audio.oncanplay=()=>{
      // console.log($audio.duration)
      var s=Math.ceil( $audio.duration%60)//35
      var min= parseInt($audio.duration/60)//1
      var h= parseInt( $audio.duration/3600)

       h= h>=10?h:'0'+h;
       min=min>=10?min:'0'+min;
       s= s>=10?s:'0'+s;
       this.setState({
         sumfileDate: h+":"+min+":"+s
       }) 

      
      //  console.log(this.state.sumfileDate)

    }
  }
  // 总时间
  audioPlayDate(){
    var $audio=document.querySelector('audio');
    $audio.ontimeupdate=()=>{
      // console.log($audio.currentTime)
      var s=Math.ceil( $audio.currentTime%60)//35
      var min= parseInt($audio.currentTime/60)//1
      var h= parseInt( $audio.currentTime/3600)

       h= h>=10?h:'0'+h;
       min=min>=10?min:'0'+min;
       s= s>=10?s:'0'+s;
       this.setState({
        audioPlayfileDate: h+":"+min+":"+s
       }) 
      //  console.log(this.state.sumfileDate)
      this.setState({
        value:($audio.currentTime/$audio.duration)*100,
        max:Math.ceil($audio.duration) 
      })
      // console.log(this.state.audioPlayfileDate)
      // console.log(this.state.value)
    }
  }

  componentDidMount() {
    this.getSumDate();
    this.audioPlayDate();
  
    // setInterval(()=>{
    //   this.setState({
    //     value:++this.state.value
    //   })
    // },1000)
    // this.isAudio();\
    // var $audio=document.querySelector('audio');
    // $audio.oncanplay=()=>{
    //   console.log($audio.duration)
    //   var s=Math.ceil( $audio.duration%60)//35
    //   var min= parseInt($audio.duration/60)//1
    //   var h= parseInt( $audio.duration/3600)

    //    h= h>=10?h:'0'+h;
    //    min=min>=10?min:'0'+min;
    //    s= s>=10?s:'0'+s;
    //    this.setState({
    //      sumfileDate: h+":"+min+":"+s
    //    }) 
    //    console.log(this.state.sumfileDate)

    // }
  }
}

export default  Footer;