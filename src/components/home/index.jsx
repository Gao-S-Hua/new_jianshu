import React, {useEffect, useState} from 'react';
import styles from 'Styles/home.less';
import Header from '../common/Header';
import Recommend from './Recommend';
// import Sidebar from './Sidebar';
import axios from 'axios';
import Loadable from 'react-loadable';
import Loading from '../common/Loading';
const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get('./data/recommend').then(res => {setArticles(res.data); setLoading(false)});
    },[1]);
    const mainBody = () => {
        return articles.map( (item) =>(<Recommend article = {item.article} key = {item.id} id = {item.id}/>) )
    }
    const Sidebar = Loadable({
        loader : () => (import('./Sidebar')),
        loading : () => (<div>"Loading"</div>)
    });
         
    return(
        <>
            <Header />
            <div className = {styles.homeBody}>
                <div className = {styles.recommendwrapper}>
                    {loading ? <Loading /> : mainBody()}
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default Home;