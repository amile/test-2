import React, {useEffect} from 'react';
import {generatePath, Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {Row, Col, List, Spin, Divider, } from 'antd';
import {PageHeader} from '../../components/page-header';
import {useStore} from '../../stores';
import {Service} from '../../types/service';
import {ROUTES} from '../../router/routes';

const renderListItem = (item: Service) => (
    <List.Item className='ml-2'>
        <Link to={generatePath(ROUTES.serviceDetails.path, {id: item.id})}>{item.name}</Link>
    </List.Item>
)

export const ServicesPage: React.FC = observer(() => {
    const {
        loading,
        services,
        getServices
    } = useStore().servicesStore;

    useEffect(() => {
        if (services === null) {
            getServices();
        }
    }, []);

    if (loading) {
        return <Spin size="large" />;
    }

    return (
        <div className="container">
            <div>
                <PageHeader title="Услуги" className="mt-4"></PageHeader>
                <Divider className='mb-4' />
            </div>
            
            <List
                bordered
                dataSource={services || undefined}
                renderItem={renderListItem}
            />
        </div>
    );
});
