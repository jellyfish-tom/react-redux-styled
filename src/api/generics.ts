import axios from 'axios';
import { FetchPostsPendingType, FetchPostsSuccessType, FetchPostsErrorType } from '../actions/post-action';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const genericGet = (domain: string) => {
  return ({
    begin,
    success,
    error,
  }: {
    begin: FetchPostsPendingType;
    success: FetchPostsSuccessType;
    error: FetchPostsErrorType;
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
    error: FetchPostsErrorType;
  }) => {
    begin();

    return axios
      .post(`${baseURL}/${domain}`, payload)
      .then(httpResponse => success(httpResponse.data))
      .catch(error);
  };
};
