import axios from "axios";

export default {
  test: function() {
    return axios.get("/api/test");
  },
  getProducts: function() {
    return axios.get("/api/products");
  },
  getBasePrice: function() {
    console.log("is this working")
    return axios.get("/api/baseprice");
  }
};


