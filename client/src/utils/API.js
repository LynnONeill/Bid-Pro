import axios from "axios";

export default {
  test: function () {
    return axios.get("/api/test");
  },
  getAllClients: function (){
    console.log ('show all existing clients')
    return axios.get ('/api/client')
  },


  /// MongoDB calls /////
  getProducts: function () {
    return axios.get("/api/products");
  },
  createProject: function (clientID) {
    console.log("create project api call is working")
    return axios.post("/api/project", clientID);
  },
  getFeatures: function () {
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

  // add clients
  addClient: function(client) {
    console.log('addUsers api call is workin')
    return axios.post('/api/addClient', client);
  },

  // validate user for login
  valUsers: function(user) {
    console.log('valUsers api call is working')
    return axios.post('/api/valusers');
  },

  deleteUsers: function(id) {
    console.log('deleteUsers api call is workin')
    return axios.delete(`/api/deleteusers/${id}`);
  },
  addProduct: function (projectID, {product}) {
    return axios.post("/api/addProduct/" + projectID, {product})

  }
}
























