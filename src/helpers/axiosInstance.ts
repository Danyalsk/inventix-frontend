import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

const Get = async () => {
  const response = await axiosInstance.get("/1");
  return response.data;
};

export default Get;

console.log(Get());
