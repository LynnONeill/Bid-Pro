import React from "react";

const AuthContext = React.createContext({ 
    isLoggedIn: '',
    handleAuth: () => {},
    handleLogout: () => {}
})

export default AuthContext;