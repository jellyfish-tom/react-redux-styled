import { AxiosError } from 'axios';

export type FetchErrorType = (error: AxiosError) => { type: string; payload: AxiosError };
