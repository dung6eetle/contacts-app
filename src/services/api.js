import axios from "axios";

class ApiService {
  constructor(options) {
    this.instance = axios.create({
      baseURL: options?.baseURL ?? "",
      headers: options?.headers ?? {},
      params: options?.params ?? {},
    });

    this.instance.interceptors.response.use(
      options.onResponse,
      options.onError
    );
  }
  get = (resource, params) => this.instance.get(resource, { params });
}
export const apiServiceInstance = new ApiService({
  baseURL: process.env.VUE_APP_API_URL,
  onResponse: (response) => response,
  onError: (e) => {
    console.error("interceptor error:", e);
    return Promise.reject(e);
  },
});
export default ApiService;
