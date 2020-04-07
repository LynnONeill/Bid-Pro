import axios from "axios";

export default {
  test: function() {
    return axios.get("/api/bid/test");
  },
  getProduct: function() {
    return axios.get("/api/product");
  },
  getBasePrice: function() {
    return axios.get("/api/baseprice");
  }
};


