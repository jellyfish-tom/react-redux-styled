import axios from 'axios';
import { FetchPostsPendingType, FetchPostsSuccessType } from '../actions/post-action';
import { FetchErrorType } from '../actions/generics';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const genericGet = (domain: string) => {
  return ({
    begin,
    success,
    error,
  }: {
    begin: FetchPostsPendingType;
    success: FetchPostsSuccessType;
    error: FetchErrorType;
  }) => {
    begin();

    return axios
      .get(`${baseURL}/${domain}`)
      .then(httpResponse => success(httpResponse.data))
      .catch(error);
  };
};

export const genericPost = (domain: string) => {
  return ({
    payload,
    begin,
    success,
    error,
  }: {
    payload: object;
    begin: FetchPostsPendingType;
    success: FetchPostsSuccessType;
    error: FetchErrorType;
  }) => {
    begin();

    return axios
      .post(`${baseURL}/${domain}`, payload)
      .then(httpResponse => success(httpResponse.data))
      .catch(error);
  };
};

export const genericDelete = (domain: string) => {
  return ({
    itemId,
    begin,
    success,
    error,
  }: {
    itemId: string | number;
    begin?: Function;
    success?: Function;
    error?: FetchErrorType;
  }) => {
    if (begin) {
      begin();
    }

    return axios
      .delete(`${baseURL}/${domain}/${itemId}`)
      .then(httpResponse => success && success(httpResponse.data))
      .catch(axiosError => error && error(axiosError));
  };
};
