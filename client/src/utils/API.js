import axios from "axios";

export default {
  test: function () {
    return axios.get("/api/test");
  },
  getProducts: function () {
    return axios.get("/api/products");
  },
  getFeatures: function () {
    console.log("getFeatures api call is working")
    return axios.get("/api/features");
  },

  getUsers: function () {
    console.log('getUsers api call is workin')
    return axios.get('/api/users');
  },
  addUsers: function () {
    console.log('addUsers api call is workin')
    return axios.post('/api/adduser')
  },
  deleteUsers: function () {
    console.log('deleteUsers api call is workin')
    return axios.delete('/api/deleteuser')

  },
  
  getAllClients: function (){
    console.log ('show all existing clients')
    return axios.get ('/api/client')

  getUsers: function() {
    console.log("getUsers api call is working")
    return axios.get("/api/users")
  }


};
























