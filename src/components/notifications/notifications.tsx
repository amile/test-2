import {notification} from 'antd';
import {NotificationMessage} from './notification-description';

export const showLoadingErrorNotification = (action: () => void) => notification.error({
    message: (
        <NotificationMessage message="Произошла ошибка!" actionLabel="Повторить" action={action} />
    ),
    duration: null,
});