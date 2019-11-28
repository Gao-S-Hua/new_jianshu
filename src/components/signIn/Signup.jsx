import React from 'react';
import {Icon, Input, Button} from 'antd';
import styles from 'Styles/sign.less';
import Wrapper from './Wrapper';
import {Link } from 'react-router-dom';
import logPic from 'Images/signup.jpg';

const Signup = () => {
    return(
        <Wrapper>
            <div className = {styles.title}>
                <Link to ='signin'><div className={styles.inactive}>登陆</div></Link>
                <b>  ·  </b>
                <Link to ='signup'><div className={styles.active}>注册</div></Link>
            </div>
            <div className = {styles.form2}>
                <Input
                    prefix={<Icon type="user" />}
                    className = {styles.formitem}
                    size = "large"
                    placeholder="你的昵称"
                />
                <Input
                    prefix={<Icon type="phone" />}
                    className = {styles.formitem}
                    size = "large"
                    placeholder="手机号"
                />
                <Input
                    prefix={<Icon type="lock" />}
                    className = {styles.formitem}
                    size = "large"
                    type="password"
                    placeholder="设置密码"
                />
            </div>
            <Button type = 'primary' className = {styles.submit} size = 'large' style={{background:"#42c02E", borderRadius: "25px", border: 'none'}}>注册</Button>
            <div className = {styles.others}>
                社交帐号直接注册
                <img src = {logPic} alt = 'log logo' style={{width : "100px", margin : "5px"}}/>
            </div>
        </Wrapper>

    );
}

export default Signup;