import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b374fd651d7941a8936dc77caa78ea0b",
  },
});
