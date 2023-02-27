import axios, {AxiosError, AxiosResponse} from 'axios';

export function getBaseUrl(): string | undefined {
    return process.env.BASE_API_URL || `${window.location.protocol}//${window.location.host}`;
}

axios.defaults.baseURL = getBaseUrl() + '/api';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const getErrorMessage = (data: any, defaultMessage: string): string => {
    const msg = data?.detail ? data.detail : defaultMessage;
    return msg;
};

type ErrorData = {errors: Record<string, unknown>};

axios.interceptors.response.use(responseBody, (axiosError: AxiosError<ErrorData>) => {
    const error = axiosError;

    if (!error.response) {
        error.message = 'Ошибка сети!';
        return Promise.reject(error);
    }

    const {data, status} = error.response;
    switch (status) {
        case 401:
            error.message = getErrorMessage(data, 'Ошибка аутентификации!');
            break;
        case 403:
            error.message = getErrorMessage(data, 'Ошибка доступа!');
            break;
        case 404:
            error.message = getErrorMessage(data, 'Запрашиваемый ресурс не найден!');
            break;
        case 500:
            error.message = getErrorMessage(data, 'Ошибка сервера!')
            break;
    }
    return Promise.reject(error);
});

export const requests = {
    get: <T>(url: string) => axios.get<T>(url),
    post: <T>(url: string, body: Record<string, any>) => axios.post<T>(url, body),
    put: <T>(url: string, body: Record<string, any>) => axios.put<T>(url, body),
    del: <T>(url: string) => axios.delete<T>(url),
};
