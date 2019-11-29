import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import axios from 'axios';
import {Link } from 'react-router-dom';
import logo from 'Images/logo.png';
import styles from 'Styles/header.less';
import {Icon} from 'antd';
import * as ACTION from '../signIn/store/constants';
const Header = (props) => {
    const {login,nickName,userID} = props;
    console.log(login);
    const dispatch = useDispatch();
    useEffect(()=> {
        axios.get('/api/user').then(res => {
            if(res.data.log){
                const action = {type : ACTION.LOG_IN, id : res.data.id, nickName : res.data.nickName};
                dispatch(action);
            }
        });
    }, [1])
    const handleLogOut = () => {
        const action = {type : ACTION.LOG_OUT};
        axios.post('/api/logout',{userID: userID})
        dispatch(action);
    }
    const BeforeLog = () => (
        <div className = {styles.rightbar}>
            <Link to = '/signin'><div className = {styles.login}>登陆</div></Link>
            <Link to = '/signup'><div className = {styles.register}> 注册</div></Link> 
            <div className = {styles.write}> <Icon type="form" />写文章</div>
        </div>
    );
    const AfterLog = () => (
        <div className = {styles.rightbar}>
            <img src = {"/media/user"+userID+'.png'} alt = 'profile' className ={styles.profile}/>
            <div className = {styles.username}> {nickName} </div>
            <div className = {styles.login} onClick = {handleLogOut}> 退出登录</div>
            <div className = {styles.write}> <Icon type="form" />写文章</div>
        </div>
    )
    return(
    <div className = {styles.headerBody}> 
        <img src = {logo} alt = 'logo' className = {styles.logo}/>
        <div className = {styles.navbar}>
            <a className = {styles.navitem1} href = '/'><Icon type="compass" /> 首页</a>
            <div className = {styles.navitem2}><Icon type="apple" /> 下载App</div>
            <div className = {styles.navsearch}>
                <input placeholder = "搜索" className = {styles.search}></input>
                <div className = {styles.searchicon}><Icon type="search" /></div>
            </div>
        </div>
            {login? <AfterLog /> : <BeforeLog />}
    </div>
    )
};
const mapState = (state) => ({
    login : state.user.get('login'),
    nickName : state.user.get('nickName'),
    userID : state.user.get('userID')
})
export default connect(mapState)(Header);