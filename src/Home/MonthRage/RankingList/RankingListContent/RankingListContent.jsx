import React, { Component } from 'react';

import RankingListContentSc from './RankingListContent.scss';//header scss文件
import './RankingListContent.css'; //header css文件
import { Button, Row, Col, DatePicker, List, Checkbox, Icon, Table, Rate } from 'antd';
import moment from 'moment';
const ButtonGroup = Button.Group;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
let count = 1;
class RankingListContent extends Component {
    constructor() {
        super();
        this.state = {
            aa: '222',
            data: [
                { key: 1, musicText: '林俊杰-她说', album: '她死活都不说', Date: '04:36', Degree: '4' },
                { key: 2, musicText: '周杰伦-七里香', album: '八里必七里还香', Date: '04:36', Degree: '4' },
                { key: 3, musicText: '李玉刚-刚好遇见你', album: '最好别让我在遇见你', Date: '04:36', Degree: '4' },
                { key: 4, musicText: '王菲-传奇', album: '这个念 zhuan', Date: '04:36', Degree: '4' },
                { key: 5, musicText: 'SHE-中国话', album: 'English!', Date: '04:36', Degree: '4' },
                { key: 6, musicText: '刘若英-后来', album: '后来怎么着来着?', Date: '04:36', Degree: '3' },
                { key: 7, musicText: '王力宏-依然爱你', album: '呜呜呜', Date: '04:36', Degree: '2' }
            ],
            columns: [{
                title: '排名',
                dataIndex: 'key',
                width: 20,
                align:"center",
                render: (text, record, index) => {
                    return <span style={this.isStyle(index)}>{text}</span>
                },
            }, {
                title: '歌曲',
                dataIndex: 'musicText',
                width: 200,
                align:"center",
                render: (text, record, index) => {
                    return <a href="javascript:;">{text}</a>

                }
            }, {
                title: '专辑',
                dataIndex: 'album',
                width: 170,
                align:"center",
                render: (text, record, index) => {
                    return <a href="javascript:;" style={{ color: 'orange' }}> 《{text}》</a>
                }
            },
            {
                title: '时长',
                dataIndex: 'Date',
                width: 90,
                align:"center",
                render: (text, record, index) => {
                    return <a href="javascript:;" style={{ color: '#ccc' }}> {text}</a>
                }
            },
            {
                title: '热度',
                dataIndex: 'Degree',
                align:"center",
                render: (text, record, index) => {
                    return <Rate disabled defaultValue={Number(text)} />
                    //  <a href="javascript:;" style={{ color: '#ccc' }}> {text}</a>
                }
            },

            {
                title: '操作',
                align:"center",
                render: (text, record, index) => {
                    return <Row>
                        <Col span={24}>
                            <span >
                                <Row style={{ textAlign: 'center' }}>
                                    <Col span={8} >
                                        <a href="javascript:;">
                                           <Icon type="play-circle-o" />
                                        </a>
                                    </Col>
                                    <Col span={8}>
                                        <a href="javascript:;">
                                            <Icon type="plus-square-o" />
                                        </a>
                                    </Col>
                                    <Col span={8}>
                                        <a href="javascript:;">
                                            <Icon type="download" />
                                        </a>


                                    </Col>
                                </Row>
                            </span>
                        </Col>
                    </Row>
                }
            }]

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
                                <h5 style={{ fontSize: 16, height: 20, fontWeight: "400" }}>
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
                    <Col span={24} style={{ paddingTop: '10px' }}>
                        <Button type="dashed" size="small" style={{ marginLeft: 10 }}
                            onClick={() => this.setState({ iShecked: !this.state.iShecked })}>
                            全选
                            </Button>
                        <ButtonGroup size="small" style={{ float: 'right' }}>
                            <Button size="small" type="primary">
                                <Icon type="play-circle" />
                                播放
                            </Button>
                            <Button size="small" >添加</Button>
                            <Button size="small" >传歌</Button>
                            <Button size="small" >传歌</Button>
                        </ButtonGroup>

                        <Table rowSelection={this.rowSelection} columns={this.state.columns} dataSource={this.state.data} />
                    </Col>
                </Row>
            </div>
        );

    }
    isStyle(s) {
        let styleObj
        if (s == 1 || s == 2 || s == 0) {
            styleObj = {
                color: '#fff',
                border: '1px #ccc solid',
                // backgroundColor: 'rgb(247, 126, 14)',
                fontSize: '14px',
                // color: '#666',
                borderRadius: '3px',
                width: '30px',
                textAlign: 'center',
                display: 'inline-block',
                backgroundImage: 'linear-gradient(to bottom,rgba(5, 214, 176, 0.945) 0%,rgba(221, 89, 245, 0.945) 40%, rgba(0, 0, 0, 0.2) 98%, rgba(5, 214, 176, 0.945) 100%)'

            }
        } else {
            styleObj = {
                fontSize: '14px',
                color: 'lightblue',
                borderRadius: '3px',
                width: '30px',
                fontWeight:'700',
                textAlign: 'center',
                display: 'inline-block',
            }
        }

        return styleObj
    }

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };


    componentWillMount() {

    }
    componentDidMount() {

    }

    onChange(i) {
        // e.target.checked = !e.target.checked
        // console.log(e.target.checked);
        console.log(i)
    }









}

export default RankingListContent;