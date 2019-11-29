import React from 'react';
import {Icon} from 'antd';

const Loading = () => {
    return (
        <div>
            <Icon type="loading" style={{ fontSize: '36px'}}/>
            <div style={{ fontSize: '20px'}}>
            页面加载中...
            </div>
        </div>
    );
}

export default Loading;