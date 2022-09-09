import { RestRequestMethods } from '../types';

export const createRequestOptions = (
  method: RestRequestMethods,
  body: RequestInit['body']
): RequestInit => ({
  headers: {
    'Content-Type': 'application/json'
  },
  method,
  ...(method !== RestRequestMethods.GET && { body: JSON.stringify(body) })
});
