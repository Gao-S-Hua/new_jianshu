import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import logo from 'Images/logo.png';
import styles from 'Styles/header.less';
import {Icon} from 'antd';
const Header = () => {
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
        <div className = {styles.rightbar}>
            <Link to = '/signin'><div className = {styles.login}>登陆</div></Link>
            <Link to = '/signup'><div className = {styles.register}> 注册</div></Link> 
            <div className = {styles.write}> <Icon type="form" />写文章</div>
        </div>
    </div>
    )
};

export default Header;