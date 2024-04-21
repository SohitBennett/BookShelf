// UserContext.js

// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const useUserContext = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [userName, setUserName] = useState("");

//   return (
//     <UserContext.Provider value={{ userName, setUserName }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


// UserContext.js

// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const useUserContext = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [userName, setUserName] = useState("");
//   const [userId, setUserId] = useState(""); // Add userId state

//   return (
//     <UserContext.Provider value={{ userName, setUserName, userId, setUserId }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(""); // Change userId to email for consistency
  // Add userId state
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName, email, setEmail, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
