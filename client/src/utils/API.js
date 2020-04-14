import axios from "axios";

export default {
  test: function() {
    return axios.get("/api/test");
  },
  getProducts: function() {
    return axios.get("/api/products");
  },
  getFeatures: function() {
    console.log("getFeatures api call is working")
    return axios.get("/api/features");
  },
  getUsers: function() {
    console.log("getUsers api call is working")
    return axios.get("/api/users")
  }
};


