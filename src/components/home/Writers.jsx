import React,{useState} from 'react';
import styles from 'Styles/sidebar.less';
import {Icon} from 'antd';
import Wtr from './Wtr';
const Writers = (props) => {
    
    const [spin, setSpin] = useState(false);
    const {writers} = props;
    const handleClick = () => {
        setSpin(true);
        setTimeout(()=>{setSpin(false)},1000);
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
             {writers.map(item => (<Wtr name = {item.name} words = {item.words} likes = {item.likes} img = {item.img} key = {item.name} />))}
        </div>
    )
}

export default Writers;
