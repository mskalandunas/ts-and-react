import {
  createRequestOptions,
  fetchResource,
  interpolateParams,
  transformQueryParams
} from './utils';
import { IRequestMethodConfig, RestRequestMethods } from './types';

const createMethod = ([methodMap, endpoint], method) => {
  return [
    methodMap.push({
      [method.toLowerCase()]: ({
        data = {},
        fail,
        params = {},
        queryParams = {},
        success
      }: IRequestMethodConfig): void => {
        fetchResource({
          fail,
          options: createRequestOptions(method, data),
          success,
          url:
            interpolateParams(endpoint, params) +
            transformQueryParams(queryParams)
        });
      }
    }) && methodMap,
    endpoint
  ];
};

export const clientFactory = (
  endpoint: string,
  methods: RestRequestMethods[]
) => {
  return Object.assign({}, ...methods.reduce(createMethod, [[], endpoint])[0]);
};
