export interface IFetchResourceConfig {
  fail: (error: Response) => any;
  options?: RequestInit;
  success: (res: Response) => any;
  url: string;
}

type TFetchResource = (config: IFetchResourceConfig) => any;

export const fetchResource: TFetchResource = ({
  fail,
  options,
  success,
  url
}) =>
  fetch(url, options).then(
    res => res.json().then(!res.ok || res.status >= 400 ? fail : success),
    fail
  );
