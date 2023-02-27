type Route = {
    path: string;
    label: string;
}

export const ROUTES: {[key: string]: Route} = {
    main: {
        path: '/',
        label: 'Главная',
    },
    services: {
        path: '/services',
        label: 'Услуги',
    },
    serviceDetails: {
        path: '/services/:id/details',
        label: 'Подробная информация об услуге',
    },
    notFound: {
        path: '/not-found',
        label: 'Страница не найдена',
    }
};
