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
  addNewProject: function (id){
    console.log ('add new project')
    return axios.post ('/api/projects/'+id)
  },
  sendPDF: function (projectID, selectedClient) {
    console.log(selectedClient)
    selectedClient["projectID"] = projectID
    console.log(selectedClient)
    return axios.get("/api/pdf/", selectedClient)
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
  getAllClients: function (){
    console.log ('show all existing clients')
    return axios.get ('/api/client')
  },

  deleteUsers: function(id) {
    console.log('deleteUsers api call is workin')
    return axios.delete(`/api/deleteusers/${id}`);
  }
}
























