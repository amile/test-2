import React from 'react'
import {Link} from 'react-router-dom';
import {Typography} from 'antd';

export const NotFound: React.FC = () => (
    <div className="text-center">
        <Typography.Title level={5}>
            Страница не найдена
        </Typography.Title>
        <div className="mt-4">
            <Link to="/">Вернуться на главную</Link>
        </div>
    </div>
);
