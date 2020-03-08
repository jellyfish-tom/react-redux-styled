import { AxiosError } from 'axios';

export type ErrorType = (error: AxiosError) => { type: string; payload: AxiosError };
