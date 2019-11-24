import React from 'react';
import {Icon} from 'antd';
import styles from 'Styles/sign.less';
import Wrapper from './Wrapper';
import {Link } from 'react-router-dom';

const SignIn = () => {
    return(
        <Wrapper>
            <div className = {styles.title}>
                <Link to ='signin'><div className={styles.active}>登陆</div></Link>
                <b>  ·  </b>
                <Link to ='signup'><div className={styles.inactive}>注册</div></Link>
            </div>
        </Wrapper>

    );
}

export default SignIn;