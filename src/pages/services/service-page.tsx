import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Row, Col, Spin, Divider, Button, Descriptions} from 'antd';
import {Link, useParams} from 'react-router-dom';
import {PageHeader} from '../../components/page-header';
import {useStore} from '../../stores';
import {ROUTES} from '../../router/routes';

export const ServicePage: React.FC = observer(() => {
    const {
        loading,
        currentService,
        getService,
        clearCurrentService
    } = useStore().servicesStore;

    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) {
            getService(id);
        }
        return () => {
            clearCurrentService();
        }
    }, [id]);

    if (loading) {
        return <Spin size="large" />;
    }

    const content = currentService !== null ? (
        <Descriptions bordered >
            <Descriptions.Item label="Наименование" span={3}>{currentService?.name}</Descriptions.Item>
            <Descriptions.Item label="Описание" span={3}>{currentService?.content}</Descriptions.Item>
            <Descriptions.Item label="Цена" span={3}>{currentService?.price}</Descriptions.Item>
        </Descriptions>
    ) : (<div>Нет данных</div>);

    return (
        <div className="container">
            <Row>
                <Col span={24}>
                    <PageHeader
                        title="Подробная информация"
                        className="mt-4 mb-3"
                        btn={<Button><Link to={ROUTES.services.path}>Вернуться к списку</Link></Button>}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Divider orientation="left" />
                    {content}
                </Col>
            </Row>
        </div>
    );
});
