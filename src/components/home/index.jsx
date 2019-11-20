import React from 'react';
import styles from 'Styles/home.less';
import Header from '../common/Header';
const Home = () => {
    return(
        <>
            <Header />
            <div className = {styles.homeBody}>
                This is Home Body
            </div>
        </>
    );
}

export default Home