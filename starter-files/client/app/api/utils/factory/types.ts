import type { IFetchResourceConfig } from './utils';
import { IJSONDict } from '@utils/types';

export enum RestRequestMethods {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT'
}

interface IParamsDict {
  [index: string]: any;
}

export interface IRequestMethodConfig {
  data: IJSONDict;
  fail: IFetchResourceConfig['fail'];
  params: IParamsDict;
  queryParams: IParamsDict;
  success: IFetchResourceConfig['success'];
}
