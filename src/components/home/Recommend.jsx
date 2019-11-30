import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import styles from 'Styles/home.less'

const Recommend = (props) => {
    const {article} = props;
    return(
        <div className = {styles.recommenditem}>
            <div className = {styles.articlebody}>
                <Link to={'/p/' + props.id}><h1 className = {styles.title} >{article.title}</h1></Link>
                <div className = {styles.content}>{article.content}</div>
                <div className = {styles.recommendfooter}> 
                    <div className = {styles.viewcnt}><Icon type="sketch" />{article.viewCnt}</div>
                    <a className = {styles.cnt}>{article.author}</a>
                    <div className = {styles.cnt}><Icon type="message" theme="filled"/>{article.commentCnt}</div>
                    <div className = {styles.cnt}><Icon type="heart" theme="filled"/>{article.likeCnt}</div>
                </div>
            </div>
            <div className = {styles.imgbody}>
                <img src = {article.imgURL} width = "150px"/>
            </div>
        </div>
    )
};

export default Recommend;