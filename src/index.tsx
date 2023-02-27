import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/layout';
import store, {StoreContext} from './stores';
import './styles/index.less';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StoreContext.Provider value={store}>
        <Router>
            <Layout />
        </Router>
    </StoreContext.Provider>
);
