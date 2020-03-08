import axios from 'axios';
import { ErrorType } from '../actions/generics';

const baseURL = 'https://jsonplaceholder.typicode.com';

type BaseRequestHandlerConfig = {
  begin?: Function;
  success?: Function;
  error?: ErrorType;
};

export const genericGet = (domain: string) => {
  return ({ begin, success, error }: BaseRequestHandlerConfig) => {
    if (begin) {
      begin();
    }

    return axios
      .get(`${baseURL}/${domain}`)
      .then(httpResponse => success && success(httpResponse.data))
      .catch(axiosError => error && error(axiosError));
  };
};

export const genericPost = (domain: string) => {
  return ({ payload, begin, success, error }: BaseRequestHandlerConfig & { payload: object }) => {
    if (begin) {
      begin();
    }

    return axios
      .post(`${baseURL}/${domain}`, payload)
      .then(httpResponse => success && success(httpResponse.data))
      .catch(axiosError => error && error(axiosError));
  };
};

export const genericDelete = (domain: string) => {
  return ({ itemId, begin, success, error }: BaseRequestHandlerConfig & { itemId: string | number }) => {
    if (begin) {
      begin();
    }

    return axios
      .delete(`${baseURL}/${domain}/${itemId}`)
      .then(httpResponse => success && success(httpResponse.data))
      .catch(axiosError => error && error(axiosError));
  };
};

export const genericUpdate = (domain: string) => {
  return ({
    itemId,
    payload,
    begin,
    success,
    error,
  }: BaseRequestHandlerConfig & { itemId: string | number; payload: object }) => {
    if (begin) {
      begin();
    }

    return axios
      .patch(`${baseURL}/${domain}/${itemId}`, {
        data: payload,
      })
      .then(httpResponse => success && success(httpResponse.data))
      .catch(axiosError => error && error(axiosError));
  };
};
