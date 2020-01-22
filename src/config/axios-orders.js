import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactassignment-thepizzappside.firebaseio.com/"
});

export default instance;
