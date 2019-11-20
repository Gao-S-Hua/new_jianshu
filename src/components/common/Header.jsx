import React, {useState} from 'react';
import logo from 'Images/logo.png';
import styles from 'Styles/header.less';
const Header = () => {
    return(
    <div className = {styles.headerBody}> 
        <img src = {logo} alt = 'logo' height = "100%" />
    </div>
    )
};

export default Header;