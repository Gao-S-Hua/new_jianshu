import React from 'react';
import styles from 'Styles/sign.less';
import logo from 'Images/logo_big.png';
import {Link } from 'react-router-dom';

const Wrapper = (props) => {
    return(
        <div className = {styles.signbody}>
        <div className = {styles.logowrapper}>
            <a href='/'><img src = {logo} alt = 'logo' width = "100px"/></a> 
            <div className = {styles.main}>
                {props.children}
            </div>
        </div>
    </div>
    );
};

export default Wrapper;