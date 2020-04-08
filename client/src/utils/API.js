import axios from "axios";

export default {
  test: function() {
    return axios.get("/api/bid/test");
  },
  getProducts: function() {
    return axios.get("/api/products");
  },
  getBasePrice: function() {
    return axios.get("/api/baseprice");
  }
};


