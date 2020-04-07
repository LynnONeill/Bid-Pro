import axios from "axios";

export default {
  test: function() {
    return axios.get("/api/bid/test");
  },
  getBasePrice: function() {
    return axios.get("/api/baseprice")
  }
};


