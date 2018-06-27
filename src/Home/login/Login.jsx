import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoginSc from './Login.scss';//引入scss
import './Login.css';//引入css
import { Icon, Input, Button } from 'antd';

class Login extends Component {
  render() {
    return (
      <div className={LoginSc.Login}>
            <div className={LoginSc.LoginMain}>
               <div className={LoginSc.formBox}>
                   <form className={LoginSc.formMain}>
                      <div className={LoginSc.Usertitle }></div>
                      <div className={LoginSc.inpBox}>
                         <div className={LoginSc.inpMain}>
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' ,marginBottom:'16px'}} />} placeholder="用户名/账号" />
                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',marginBottom:'16px' }} />} type="password" placeholder="密码" />
                         <Button type="primary"  style={{ width:'100%' ,marginBottom:'4px'}}  onClick={()=>this.goHome()}>登录</Button>
                         <Button    style={{ width:'100%',backgroundColor:'rgba(240, 79, 50)' }}  >取消</Button>
                         </div>
                     
                      </div>
                      
                      <Link to="/Main">Link/Go-->Main</Link>
                   </form>
                   
               </div>
            </div>
      </div>
    );
  }

  goHome(){
    this.props.history.push('/Main');
  }
  
}

export default  Login;