import React, { Component } from 'react';

import SingerSc from './Singer.scss';//header scss文件
import  './Singer.css'; //header css文件
import { Button } from 'antd';
class  Singer extends Component {
  render() {
    return (
      <div className="Singer">
         <header>Singer</header>
      </div>
    );
  }
}

export default  Singer;