import React from 'react';
import {Icon} from 'antd';
import styles from 'Styles/sign.less';
import logo from 'Images/logo_big.png'

const SignIn = () => {
    return(
        <div className = {styles.signbody}>
            <div className = {styles.logowrapper}>
                <a href='/'><img src = {logo} alt = 'logo' width = "100px"/></a> 
                <div className = {styles.main}>
                    
                </div>
            </div>
        </div>
    );
}

export default SignIn;