import { clientFactory, RestRequestMethods } from './utils';
import { DEV_SERVER_BASE_URL } from './constants';

export const todoClient = clientFactory(
  `${DEV_SERVER_BASE_URL}/api/todos`,
  [
    RestRequestMethods.DELETE,
    RestRequestMethods.GET,
    RestRequestMethods.POST,
    RestRequestMethods.PATCH
  ]
);