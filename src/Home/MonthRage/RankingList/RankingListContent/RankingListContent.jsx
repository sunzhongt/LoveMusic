import React, { Component } from 'react';

import RankingListContentSc from './RankingListContent.scss';//header scss文件
import  './RankingListContent.css'; //header css文件
import { Button ,Row,Col,DatePicker,List  ,Checkbox  } from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
class  RankingListContent extends Component {
    constructor(){
        super();
        this.state={
            aa:'222',
            datas:[
                'qwqwqwqwqw',
                'qwqwqwqwqw',
                'qwqwqwqwqw',
                'qwqwqwqwqw',
            ],
            
        }
    }
  render() {
    return (
          <div className="RankingListContent">
            <Row>
                <Col span={18}>
                    <h4 className={RankingListContentSc.titles}>
                        爱音乐排行榜
                    </h4>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={12}>
                            <h5 style={{ fontSize:17,height:20,fontWeight:"400"}}>
                                设定更新时间：
                            </h5> 
                        </Col>
                        <Col span={12}>
                            <DatePicker defaultValue={moment('2015/01/29', dateFormat)} format={dateFormat} />
                        </Col>
                    </Row>  
                </Col>
            </Row>
           <Row>
               <Col span={24}>
               <List
                header={<div>
                          <Checkbox onChange={this.onChange}></Checkbox>sss
                        </div>}
                footer={<div>Footer</div>}
                bordered={false}
                dataSource={this.state.datas}
                renderItem={item => (
                            <List.Item>
                               <Checkbox onChange={this.onChange}></Checkbox> {item}       
                            </List.Item>
                            )}
                />
               </Col>
           </Row>
          </div>
    );

  }
  componentWillMount(){
   
  }
  componentDidMount(){

  }

  onChange(e){
   console.log(`checked = ${e.target.checked}`)
  }






  
  
  
}

export default  RankingListContent;