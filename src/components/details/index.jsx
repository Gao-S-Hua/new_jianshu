import React from 'react';
import styles from 'Styles/details.less';
import Header from '../common/Header';
const Details = () => {
    return(
        <>
            <Header />
            <div className = {styles.detailsBody}>
                This is Details
            </div>
        </>
    );
}

export default Details