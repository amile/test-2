import React from 'react';
import {Button} from 'antd';

type NotificationMessageProps = {
    message: string;
    actionLabel?: string;
    action?: () => void; 
}

export const NotificationMessage: React.FC<NotificationMessageProps> = ({
    message,
    actionLabel = null,
    action = null
}) => (
    <div className="d-flex justify-content-between">
        {message}
        {action ? (<Button size="small" onClick={action}>{actionLabel}</Button>) : null}
    </div>
);
