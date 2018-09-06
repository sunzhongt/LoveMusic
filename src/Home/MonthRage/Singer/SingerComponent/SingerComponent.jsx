import React, { Component } from 'react';
import { } from 'antd';
import SingerComponentSc from './SingerComponent.scss';//header scss文件
import './SingerComponent.css'; //header css文件
import { Button, Icon, Row, Col } from 'antd';


const ButtonGroup = Button.Group;
class SingerComponent extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'SingerComponent',
      fromCharCodeList: []
    }
  }
  render() {
    return (
      <div className="SingerComponent">
        <Row>
          <Col span={1}>
            <span className={SingerComponentSc.sosText}>全部</span>
          </Col>
          <Col span={22}>
            <div className={SingerComponentSc.itembox}>
              {this.getfromCharCode()}
            </div>
          </Col>
          <Col span={1}>
            <span className={SingerComponentSc.itme} >#</span>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col span={9}>
            <Row>
              <Col span={4}>
                <span>
                  排序：
                   </span>
              </Col>

              <Col span={20}>
                <ButtonGroup size="small" style={{ marginRight: 20 }}>
                  <Button type="primary" size="small" className={SingerComponentSc.btn} >
                    歌手热度
                   </Button>
                  <Button size="small" className={SingerComponentSc.btn}>
                    人气飙升
                    </Button>
                  <Button size="small" className={SingerComponentSc.btn}>
                    最近发片
                    </Button>
                </ButtonGroup>
              </Col>
            </Row>




          </Col>
          <Col span={8} offset={9}>

          </Col>
        </Row>

        <Row style={{ marginTop: '20px' }}>
          {/* <Col span={6} className={SingerComponentSc.SingerList}>
            <Row>
              <Col span={24} >
                <img style={{ width: '100%' }} src={require('../../../../lib/images/Singer/singer001.png')} alt="" />
              </Col>
              <Col span={24}>
                xxx
                   </Col>
            </Row>
          </Col> */}
          {
            this.ShowList()
          } 
        </Row>
      </div>
    );
  }
  componentWillMount() {

  }
  componentDidMount() {
  }
  getImgList(){

  }
  ShowList() {
    var list = require('../../../../lib/json/SingerImg.json');
    // console.log();
  return  list.data.map((itme,i)=>{
         var img ='../../../../lib/images/Singer/singer001.png';
        //  console .log(itme.imgUrl)
       return    <Col span={6} className={SingerComponentSc.SingerList}  key={i}>
                    <Row>
                      <Col span={24} >
                        <img style={{ width: '100%' }} src={itme.imgUrl} alt="" />
                        
                        {/* {} */}
                      </Col>
                      <Col span={24}>
                        {itme.SingerName}
                      </Col>
                    </Row>
                   </Col>
    })
  
  }
  getfromCharCode() {
    var aaa = []
    for (var i = 0; i < 26; i++) {
      //  console.log();//输出A-Z 26个大写字母
      aaa.push(String.fromCharCode(65 + i))
    }

    return aaa.map((item, i) => {
      return <span className={SingerComponentSc.itme} key={i}>
        {item}
      </span>
    })

  }
}

export default SingerComponent;