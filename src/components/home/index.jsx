import React, {useEffect, useState} from 'react';
import styles from 'Styles/home.less';
import Header from '../common/Header';
import Recommend from './Recommend';
import Axios from 'axios';
const Home = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        Axios.get('./data/recommend').then(res => {setArticles(res.data);});
    },[1])
    const mainBody = () => {
        return articles.map( (item) =>(<Recommend article = {item.article} key = {item.id}/>) )
    }
         
    return(
        <>
            <Header />
            <div className = {styles.homeBody}>
                This is Home Body
                <div className = {styles.recommendwrapper}>
                    {mainBody()}
                </div>
            </div>
        </>
    );
}

export default Home