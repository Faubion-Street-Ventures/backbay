import {DatabaseInterface} from './database';

export type ExpressRouter = {
  user: Function,
  post: Function,
  get: Function,
  put: Function,
  delete: Function,
};

export type ExpressRequest = {
  cookies: Object,
  url: string,
  originalUrl: string,
  headers: Object,
  method: string,
  path: string,
  params: Object,
  query: Object,
  body: Object,
  db: DatabaseInterface,
  apiKey: string,
  jwt: Object,
  user: Object,
  file: Object,
  startTime: number,
  traceId: string,
  responseBody: Object,
};
