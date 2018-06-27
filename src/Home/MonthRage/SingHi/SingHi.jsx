import React, { Component } from 'react';

import SingHiSc from './SingHi.scss';//header scss文件
import  './SingHi.css'; //header css文件
import { Button } from 'antd';
class  SingHi extends Component {
  render() {
    return (
      <div className="SingHi">
         <header>SingHi</header>
      </div>
    );
  }
}

export default  SingHi;