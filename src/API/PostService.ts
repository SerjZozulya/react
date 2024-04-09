import axios from "axios-typescript";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = (config : any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getSeveral(page: any, limit: any) {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
