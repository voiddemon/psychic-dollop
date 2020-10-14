import axios from "axios";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject;
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      return Promise.reject(error.response);
    }

    const defaultOfflineError = {
      status: "N/A",
      message: "No Network Available",
    };

    return Promise.reject(defaultOfflineError);
  }
);

export default axios;
