import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const explainTopic = async (topic) => {
  const response = await API.post("/explain", {
    topic,
  });

  return response.data;
};