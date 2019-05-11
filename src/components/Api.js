import axios from "axios";

export default axios.create({

  baseURL: "https://info30005-2019-ch.herokuapp.com",
  withCredentials: true
});
//https://info30005-2019-ch.herokuapp.com
