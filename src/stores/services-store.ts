import {notification} from 'antd';
import {makeAutoObservable, runInAction} from 'mobx';
import {fetchServiceDetails, fetchServices} from '../api/servises-api';
import {showLoadingErrorNotification} from '../components/notifications/notifications';
import {Service} from '../types/service';
import {IRootStore} from './root-store';

export interface IServicesStore {
    loading: boolean;
    services: Service[] | null;
    currentService: Service | null;
    getServices: () => void;
    getService: (id: string) => void;
    clearCurrentService: () => void;
}

class ServicesStore implements IServicesStore {
    rootStore: IRootStore;
    loading = false;
    currentService: Service | null = null;
    services: Service[] | null = null;

    constructor(rootStore: IRootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    getServices = async () => {
        this.loading = true;
        try {
            const response = await fetchServices();
            runInAction(() => {
                this.loading = false;
                this.services = response as any;
            });
        } catch (e: any) {
            this.loading = false;
            showLoadingErrorNotification(() => this.reload());
        }
    }

    getService = async (id: string) => {
        this.loading = true;
        try {
            const response = await fetchServiceDetails(id);
            runInAction(() => {
                this.loading = false;
                this.currentService = response as any;
            });
            
        } catch (e: any) {
            this.loading = false;
            showLoadingErrorNotification(() => this.reload(id));
        }
    }

    reload = (id: string | null = null) => {
        notification.destroy();
        if (id !== null) {
            this.getService(id);
        } else {
            this.getServices();
        }
    }

    clearCurrentService = () => {
        this.currentService = null;
    }
}

export default ServicesStore;
