import React from "react";

const ClientContext = React.createContext({
    id: "",
    name: "",
    businessName:"",
    phoneNumber:"",
    email:"",
    address:"",
    addressTwo:"",
    city:"",
    state:"",
    zip:"",
    notes:"",
    createdAt:"",
    updatedAt:"",
    projectID:"",
    handleClick: () => {},
    newClient: () => {},
  });

  export default ClientContext;