import React, { createContext, useContext, useState } from "react";
import { LocalSt } from "../LocalStorage";

export const Visitorcontext = createContext(); // Creating the context // Wrapper name should be this
export const useVisitorContext = () => {
  const context = useContext(Visitorcontext);
  return context;
};
export const VisitorcontextProvider = ({ children }) => {
  const [user, setUser] = useState();

  // The function is need to be export for Login
  const loginchange = (userdata) => {
    console.log("LoginChange Context data", userdata);
    if (userdata) {
      setUser(userdata);
      if (!LocalSt("getLST")) {
        LocalSt("addLST", userdata);
        console.log("New Login. Userdata added in LST!");
      } else {
        console.log("Error : Already the user data is in LST");
      }
    } else {
      console.log("Error : Userdata didnt received from login page api");
    }

    // New tab
    if (!userdata && LocalSt("getLST")) {
      setUser(JSON.parse(LocalSt("getLST")));
    }
  };

  // The function is need to be export for logout
  const logoutchange = () => {
    if (user) {
      setUser({ user: "" });
      if (LocalSt("getLST")) {
        LocalSt("removeLST");
        console.log("The data is availabe to remove. Logout action performed!");
      } else {
        console.log("Error : No Data is available in LST to remove!!");
      }
    }
  };

  // Wrapper
  return (
    <Visitorcontext.Provider value={{ loginchange, logoutchange, user }}>
      {children}
    </Visitorcontext.Provider>
  );
};
