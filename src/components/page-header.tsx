import React from 'react';
import {Typography} from 'antd';
import '../styles/page-header.less';

interface PageHeaderProps {
    title: string;
    className?: string;
    btn?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    className = null,
    btn = null
}) => (
    <div className={`page-header ${className}`}>
        <Typography.Title level={3}>
            {title}
        </Typography.Title>
        {btn}
    </div>
);
