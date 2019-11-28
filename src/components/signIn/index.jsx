import React, {useState} from 'react';
import {Icon, Input, Button,Checkbox } from 'antd';
import {Redirect} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import axios from 'axios';
import styles from 'Styles/sign.less';
import Wrapper from './Wrapper';
import {Link } from 'react-router-dom';
import logPic from 'Images/log.jpg';
import * as Action from './store/constants';

const SignIn = (props) => {
    const dispatch = useDispatch();
    const {login} = props;
    const [userid, setUserid] = useState("");
    const [pswd, setPswd] = useState("");
    const [mem, setMem] = useState(true);
    const [error, setError] = useState(false);
    const handleSubmit = () => {
        const postData = {
            userid : userid,
            pswd : pswd
        }
        console.log(postData);
        axios.post("/api/user",postData)
        .then(res => {
            if(!res.data.log)
                setError(true)
            else{
                const action = {type : Action.LOG_IN, id : res.data.id, nickName : res.data.nickName};
                console.log("passed");
                console.log(res.data);
                dispatch(action);
            }
        })
    }
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
                    value = {userid}
                    onChange = {(e) => setUserid(e.target.value)}
                />
                <Input
                    prefix={<Icon type="lock" />}
                    className = {styles.formitem}
                    size = "large"
                    type="password"
                    placeholder="密码"
                    value={pswd}
                    onChange = {(e) => setPswd(e.target.value)}
                />
            </div>
            <div>
                <Checkbox 
                    className = {styles.remeberme} 
                    checked = {mem} 
                    onClick = {()=>{setMem(!mem)}}>
                        记住我
                </Checkbox>
                {error ? <div className = {styles.logerror}>用户或者密码错误</div> : null}
            </div>
            <Button 
                type = 'primary' 
                className = {styles.submit1} 
                onClick = {handleSubmit}
                size = 'large' style={{}}>
                    登陆
            </Button>
            <div className = {styles.others}>
                社交帐号登录
                <img src = {logPic} alt = 'log logo' style={{width : "200px", margin : "5px"}}/>
            </div>
            {login ? <Redirect to='/' /> : null}
        </Wrapper>

    );
}

const mapState = (state) => ({
    login : state.user.get('login')
})
export default connect(mapState)(SignIn);