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

  // user calls 
  getUsers: function() {
    //console.log('getUsers api call is workin')
    return axios.get('/api/users');
  },

  addUsers: function(user) {
    console.log('addUsers api call is workin')
    return axios.post('/api/addusers', user);
  },

  // validate user for login
  valUsers: function(user) {
    console.log('valUsers api call is working')
    return axios.post('/api/valusers');
  },

  deleteUsers: function(id) {
    console.log('deleteUsers api call is workin')
    return axios.delete(`/api/deleteusers/${id}`);
  }
};


