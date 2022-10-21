import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { get_env } from '@/config';
const service = axios.create({
    baseURL: '/',
    timeout: 10000,
    withCredentials: false,
});
const get_fn = service.get;
const post_fn = service.post;
const base_api = get_env('base_api');
const passport_api = get_env('passport_api');
import { userInfoStore } from '@/store/';

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const headers: AxiosRequestHeaders = {
        Authorization: localStorage.getItem('Authorization') || '',
    };
    config.headers = headers;
    return config;
});
service.interceptors.response.use(
    response => {
        const {
            data: { code, data, msg },
        } = response;
        if (code === 200 || code === 100000) {
            return data;
        }
        switch (code) {
            case 100006: //  CODE失效
                location.href = location.origin;
                break;
            default:
                return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error);
    }
);
type BASE_URL_TYPE = 'base' | 'passport';
enum BASE_URL_TYPE_ENUM {
    'base',
    'passport',
}
const BASE_URL_TYPE_ENUM_LIST = [base_api, passport_api];
function get_api_base_url(base_url: BASE_URL_TYPE): string {
    return (BASE_URL_TYPE_ENUM_LIST[BASE_URL_TYPE_ENUM[base_url]] || '') as string;
}

export default {
    get(url: string, params?: object, base_url: BASE_URL_TYPE = 'base') {
        const send_url = `${get_api_base_url(base_url)}${url}`;
        return get_fn(send_url, { params }) as AxiosResponse['data'];
    },
    post(url: string, params?: object, base_url: BASE_URL_TYPE = 'base') {
        const send_url = `${get_api_base_url(base_url)}${url}`;
        return post_fn(send_url, params) as AxiosResponse['data'];
    },
};
