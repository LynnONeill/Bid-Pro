import axios from "axios";

export default {


  /// MongoDB calls /////
  getProducts: function () {
    return axios.get("/api/products");
  },
  addProduct: function (projectID, {product}) {
    return axios.post("/api/addProduct/" + projectID, {product})
  },
  getFeatures: function () {
    console.log("getFeatures api call is working")
    return axios.get("/api/features");
  },
  getAllProjects: function (id){
    console.log ('show all existing projects')
    return axios.get ('/api/projects/'+id)
  },
  createProject: function (clientID) {
    console.log("create project api call is working")
    return axios.post("/api/project", clientID);
  },
  addNewProject: function (id){
    console.log ('add new project')
    return axios.post ('/api/projects/'+id)
  },

  /// MySQL calls /////
  // user calls 
  getUsers: function() {
    console.log('getUsers api call is workin')
    return axios.get('/api/users');
  },

  addUsers: function(user) {
    console.log('addUsers api call is workin')
    return axios.post('/api/addusers', user);
  },

  // validate user for login
  valUsers: function(data) {
    console.log('valUsers api call is working')
    return axios.post('/api/login', data);
  },

  deleteUsers: function(id) {
    console.log('deleteUsers api call is workin')
    return axios.delete(`/api/deleteusers/${id}`);
  },

  // client calls
  getAllClients: function (){
    console.log ('show all existing clients')
    return axios.get ('/api/client')
  }

}
























