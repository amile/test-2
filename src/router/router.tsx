import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {NotFound} from '../pages/errors/not-found';
import {ServicePage} from '../pages/services/service-page';
import {ServicesPage} from '../pages/services/services-page';
import {ROUTES} from './routes';

export const RoutedContent: React.FC = () => (
    <Routes>
        <Route path="/" element={<Navigate to={ROUTES.services.path} replace />}/>
        <Route path={ROUTES.services.path} element={<ServicesPage />} />
        <Route path={ROUTES.serviceDetails.path} element={<ServicePage />} />

        {/*    404    */}
        <Route path="*" element={<NotFound />} />
    </Routes>
);