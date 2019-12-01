import React,{useState} from 'react';
import styles from 'Styles/home.less';
import sidebar1 from 'Images/sidebar1.png';
import sidebar2 from 'Images/sidebar2.png';
import sidebar3 from 'Images/sidebar3.png';
import sidebar4 from 'Images/sidebar4.png';
import barCode from 'Images/2d-bar-code.png';
const Sidebar = () => {
    const [hover, setHover] = useState(false)
    return(
        <div className = {styles.sidebarwrapper}>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar1} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar2} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar3} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.sidebarimgwrapper}><img src={sidebar4} alt = "sidebar img" width = "280px"/></div>
            <div className = {styles.bigwrapper}>
                <div className = {hover ? styles.showbarcode:styles.hide }>
                    <div className = {styles.arrow}></div>
                    <img src = {barCode} alt = "2D bar code" className = {styles.bigbarcode}/>
                </div>
            </div>
            <div className = {styles.downloadwrapper} 
                onMouseOver = {() => {setHover(true)}}
                onMouseOut = {()=> {setHover(false)}}
                >
                <img src = {barCode} alt = "2D bar code" className = {styles.barcode}/>
                <div className = {styles.download}>下载简书手机APP ></div>
                <div className = {styles.downloaddetail}>随时随地发现和创造内容</div>
            </div>
        </div>
    );
};

export default Sidebar;