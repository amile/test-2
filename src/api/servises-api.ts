import {Service} from '../types/service';
import {requests} from './axios-defaults';

export const fetchServices = () => requests.get<Service[]>('services');
export const fetchServiceDetails = (id: string) => requests.get<Service>(`services/${id}`);