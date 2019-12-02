import React,{useEffect,useState} from 'react';
import styles from '../../styles/home.less';
import axios from 'axios';
import {Icon} from 'antd';
import Wtr from './Wtr';
const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [spin, setSpin] = useState(false);
    useEffect(()=>{
        axios.get('/data/writers').then((res) => {setWriters(res.data)})
    },[1]);
    const handleClick = () => {
        setSpin(true);
        setTimeout(()=>{setSpin(false)},1500);
    };
    return(
        <div className = {styles.writers}>
            <div className = {styles.recowriter}>
                推荐作者
                <div className = {styles.change}
                    onClick = {handleClick}>
                    { spin ? <Icon type="sync" spin/> : <Icon type="sync"/>} 
                    换一批
                </div>
            </div>
             {writers.map(item => (<Wtr name = {item.name} words = {item.words} img = {item.img} key = {item.name} />))}
        </div>
    )
}

export default Writers;
