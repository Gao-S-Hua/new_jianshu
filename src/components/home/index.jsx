import React, {useEffect, useState} from 'react';
import styles from 'Styles/home.less';
import Header from '../common/Header';
import Recommend from './Recommend';
import Sidebar from './Sidebar';
import axios from 'axios';
const Home = (props) => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        axios.get('./data/recommend').then(res => {setArticles(res.data)});
    },[1])
    const mainBody = () => {
        return articles.map( (item) =>(<Recommend article = {item.article} key = {item.id}/>) )
    }
         
    return(
        <>
            <Header />
            <div className = {styles.homeBody}>
                <div className = {styles.recommendwrapper}>
                    {mainBody()}
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default Home;