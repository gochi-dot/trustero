import axios from "axios";

const apiClient = axios.create({
  // Later read this URL from an environment variable
  baseURL: "https://interview-server-2022.boadler.repl.co"
});

export default apiClient;