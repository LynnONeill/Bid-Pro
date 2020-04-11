import React, { createContext, useReducer, useContext } from "react";

const ClientContext = createContext({
    id: "",
    name: "",
    businessName:"",
    email:"",
    address:"",
    addressTwo:"",
    city:"",
    state:"",
    zip:"",
    notes:""
  });