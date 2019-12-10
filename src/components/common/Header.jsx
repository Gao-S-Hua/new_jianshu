import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import logo from 'Images/logo.png';
import styles from 'Styles/header.less';
import {Icon} from 'antd';
import * as ACTION from '../signIn/store/constants';
const Header = (props) => {
    const dispatch = useDispatch();
    const {login,nickName,userID} = props;
    const [search, setSearch] = useState("");
    const [timerID,setTimerID] = useState(null);
    const [searchResult, setSearchResult] = useState("");
    const [focus, setFocus] = useState(false);
    useEffect(()=> {
        if(!login){
            console.log("request User ID")
            axios.get('/api/user').then(res => {
                if(res.data.log){
                    const action = {type : ACTION.LOG_IN, id : res.data.id, nickName : res.data.nickName};
                    dispatch(action);
                }else
                    console.log("server declined")
            });
        }
        else{
            console.log("continue");
        }
    }, [1])
    useEffect(() => {
        if(timerID){
            clearTimeout(timerID);
        }
        if(search.length > 0)
            setTimerID( setTimeout(() => {console.log('reqest:' + search),setSearchResult("搜索 '"+search+"' 的结果")} , 1000) );
        if(search.length == 0)
            setSearchResult("");
    }, [search])
    function handleChange(e){
        setSearch(e.target.value);
    }
    const handleLogOut = () => {
        const action = {type : ACTION.LOG_OUT};
        axios.post('/api/logout',{userID: userID})
        dispatch(action);
    }
    const BeforeLog = () => (
        <div className = {styles.rightbar}>
            <Link to ="/signin"><div className = {styles.login}>登陆</div></Link>
            <Link to = "/signup"><div className = {styles.register} onClick = {() => {history.push("/signup")}}> 注册</div></Link>
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
            <Link to='/'><div className = {styles.navitem1}><Icon type="compass" /> 首页</div></Link>
            <div className = {styles.navitem2}><Icon type="apple" /> 下载App</div>
            <div className = {styles.searchWrapper}>
                <div className = {styles.navsearch}>
                    <input 
                        placeholder = "搜索" 
                        className = {styles.search} 
                        onChange = {handleChange} 
                        onFocus = {()=>setFocus(true)}
                        onBlur = {()=> setFocus(false)}
                        value = {search}>
                    </input>
                    <div className = {styles.searchicon}><Icon type="search" /></div>
                </div>
    {searchResult.length === 0 ? null : <div className = {focus ? styles.searchResult : styles.hide}>{searchResult}</div>}
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