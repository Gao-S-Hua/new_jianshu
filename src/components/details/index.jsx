import React from 'react';
import styles from 'Styles/details.less';
import Header from '../common/Header';
const Details = (props) => {
    console.log(props.match.params);
    const msg = "<h1>Title</h1>"
    return(
        <>
            <Header />
            <div className = {styles.detailsBody}>
                <div className = {styles.mainbody} dangerouslySetInnerHTML={{__html:msg}}>
                </div>
            </div>
        </>
    );
}

export default Details