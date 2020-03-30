import React, { createContext, useState, useContext } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const logUserIn = async (token) => {
        try {
          await AsyncStorage.setItem("isLoggedIn", "true");
          await AsyncStorage.setItem("jwt", token);
          setIsLoggedIn(true);
          console.log(setIsLoggedIn,"AuthContext.js");
        } catch (e) {
          console.log(e);
        }
      };
    
      const logUserOut = async () => {
        try {
          await AsyncStorage.setItem("isLoggedIn", "false");
          setIsLoggedIn(false);
          console.log(setIsLoggedIn);
        } catch (e) {
          console.log(e);
        }
      };

      return <AuthContext.Provider value={{isLoggedIn,logUserIn,logUserOut}}>{children}</AuthContext.Provider>
} 

export const useIsLoggedIn = () => {
    const {isLoggedIn} = useContext(AuthContext);

    console.log(isLoggedIn);
    return isLoggedIn;
}

export const useLogIn = () => {
    const {logUserIn} = useContext(AuthContext);
    return logUserIn;
}


export const useLogOut = () => {
    const {logUserOut} = useContext(AuthContext);

    return logUserOut;
}