import React,{useState,useEffect} from 'react';
import styles from 'Styles/details.less';
import Header from '../common/Header';
import axios from 'axios';
const Details = (props) => {
    const [content, setContent] = useState("");
    useEffect(() => {
        axios.get('/data/article' + props.match.params.id)
        .then( res => {setContent(res.data.content)})
        .catch(() => {setContent("<h1>文章删除或者服务器请求错误，请重试</h1>")})
    },[1])
    const msg = "<h1>Title</h1>"
    return(
        <>
            <Header />
            <div className = {styles.detailsBody}>
                <div className = {styles.mainbody} dangerouslySetInnerHTML={{__html:content}}>
                </div>
            </div>
        </>
    );
}

export default Details