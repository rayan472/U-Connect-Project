import React from 'react';
import { Pagination } from 'antd';
import Column from 'antd/es/table/Column';
const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};

const PaginationComponent = (props) => {
    return <Pagination {...props} itemRender={itemRender}/>;
};

export default PaginationComponent;
