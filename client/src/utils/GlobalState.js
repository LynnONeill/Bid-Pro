import React from "react";

const ClientContext = React.createContext({
    id: "",
    name: "",
    businessName:"",
    email:"",
    address:"",
    addressTwo:"",
    city:"",
    state:"",
    zip:"",
    notes:"",
    handleClick: () => {}
  });

  export default ClientContext;