import React from 'react';
import {Icon} from 'antd';
import styles from '../../styles/home.less';

const Wtr = (props) => {
    
    return(
        <div className = {styles.writerWrapper}>
            <img src = {props.img} alt = 'writer' className = {styles.writerimg}/>
            <div className = {styles.watch}><Icon type="plus" />关注</div>
            <div className = {styles.writertitle}>{props.name}</div>
            <div className = {styles.comment}>写了{props.words}字 - {props.likes}喜欢</div>
        </div>
    );
};

export default Wtr;