import ServicesStore from './services-store';

export interface IRootStore {
    servicesStore: ServicesStore;
}

class RootStore implements IRootStore {
    servicesStore: ServicesStore;

    constructor() {
        this.servicesStore = new ServicesStore(this);
    }
}

export default RootStore;
