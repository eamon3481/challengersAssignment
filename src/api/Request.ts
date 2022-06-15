import axios, {AxiosInstance} from 'axios';

export default class Request {
  public req: AxiosInstance;
  constructor(domain: string) {
    this.req = axios.create({
      baseURL: domain,
    });
  }
}
