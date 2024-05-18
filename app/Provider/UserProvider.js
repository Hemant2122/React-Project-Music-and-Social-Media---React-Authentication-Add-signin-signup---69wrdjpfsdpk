"use client";
import React, { useState } from "react";

export const UserContext = React.createContext({

    getToken: "",
    getName: "",
    nameHandler: () => {},
    tokenHandler: () => {},
    logout: () => {},
});


const UserProvider = (props) => {
    const [getName, setName] = useState(sessionStorage.getItem("name"));
    const [getToken, setToken] = useState(sessionStorage.getItem("token"));

    console.log(getName, getToken, "User Provider logs");


    const { children } = props;

    function tokenHandler(token) {
        setToken(token);
        sessionStorage.setItem("token", token);
    }

    function nameHandler(name) {
        setName(name);
        sessionStorage.setItem("name", name);
    }

    function logout(){
        setName("");
        setToken("");
    }

    const valueObj = {
        getName,
        getToken,
        tokenHandler,
        nameHandler,
        logout,
    };
 


    return(
        <>
            <UserContext.Provider value={valueObj} >
                {children}
            </UserContext.Provider>
        </>
    );
};

export default UserProvider;