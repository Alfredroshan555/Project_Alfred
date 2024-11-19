import axios, { AxiosInstance } from "axios";

export default class APIService {
  client: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.client = axios;
  }

  getData() {
    return this.client.get("https://jsonplaceholder.typicode.com/posts/1");
  }
}

export const service = new APIService(axios);
