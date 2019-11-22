import React from 'react';
import {Icon} from 'antd';
import styles from 'Styles/home.less'

const Recommend = (props) => {
    const {article} = props;
    console.log(article);
    return(
        <div className = {styles.recommenditem}>
            <h1 className = {styles.title} >{article.title}</h1>
            <div className = {styles.content}>{article.content}</div>
            <div className = {styles.recommendfooter}> 
                <div className = {styles.viewcnt}><Icon type="sketch" />{article.viewCnt}</div>
                <a className = {styles.cnt}>{article.author}</a>
                <div className = {styles.cnt}><Icon type="message" theme="filled"/>{article.commentCnt}</div>
                <div className = {styles.cnt}><Icon type="heart" theme="filled"/>{article.likeCnt}</div>
            </div>
        </div>
    )
};

export default Recommend;