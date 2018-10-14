import axios from "axios";

const instance = axios.create({
  baseURL: `http://127.0.0.1:8080`,
  headers: { "Content-Type": "application/json" },
  timeout: 100000
});

export const Request = {
  get: (url: string) => instance.get(url)
};
