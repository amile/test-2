import {createContext, useContext} from 'react';
import RootStore, {IRootStore} from './root-store';

const store: IRootStore = new RootStore();

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export default store;
