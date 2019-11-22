import React from 'react';
import styles from 'Styles/home.less';
import sidebar1 from 'Images/sidebar1.png';
import sidebar2 from 'Images/sidebar2.png';
import sidebar3 from 'Images/sidebar3.png';
import sidebar4 from 'Images/sidebar4.png';
const Sidebar = () => {
    return(
        <div className = {styles.sidebarwrapper}>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar1} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar2} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar3} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar4} alt = "sidebar img" width = "280px"/></div>
        </div>
    );
};

export default Sidebar;