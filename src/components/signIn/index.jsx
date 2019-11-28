import React from 'react';
import {Icon, Input, Button,Checkbox } from 'antd';
import styles from 'Styles/sign.less';
import Wrapper from './Wrapper';
import {Link } from 'react-router-dom';
import logPic from 'Images/log.jpg';

const SignIn = () => {
    return(
        <Wrapper>
            <div className = {styles.title}>
                <Link to ='signin'><div className={styles.active}>登陆</div></Link>
                <b>  ·  </b>
                <Link to ='signup'><div className={styles.inactive}>注册</div></Link>
            </div>
            <div className = {styles.form}>
                <Input
                    prefix={<Icon type="user" />}
                    className = {styles.formitem}
                    size = "large"
                    placeholder="手机号或邮箱"
                />
                <Input
                    prefix={<Icon type="lock" />}
                    className = {styles.formitem}
                    size = "large"
                    type="password"
                    placeholder="密码"
                />
            </div>
            <Checkbox className = {styles.remeberme}>记住我</Checkbox>
            <Button type = 'primary' className = {styles.submit} size = 'large' style={{background:"#3194d0"}}>登陆</Button>
            <div className = {styles.others}>
                社交帐号登录
                <img src = {logPic} alt = 'log logo' style={{width : "200px", margin : "5px"}}/>
            </div>
        </Wrapper>

    );
}

export default SignIn;