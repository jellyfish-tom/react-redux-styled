import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const genericGet = (domain: string) => {
  return ({
    begin,
    success,
    error,
  }: {
    begin: any;
    success: any;
    error: any;
  }) => {
    begin();

    axios
      .get(`${baseURL}/${domain}`)
      .then(httpResponse => success(httpResponse.data))
      .catch(httpError => error(httpError));
  };
};

export const genericPost = (domain: string) => {
  return ({
    payload,
    begin,
    success,
    error,
  }: {
    payload: any;
    begin: any;
    success: any;
    error: any;
  }) => {
    begin();

    axios
      .post(`${baseURL}/${domain}`, payload)
      .then(httpResponse => success(httpResponse.data))
      .catch(httpError => error(httpError));
  };
};
