// AppContext.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleButtonClick = (componentNumber) => {
    setActiveComponent(componentNumber);
  };

  return (
    <AppContext.Provider value={{ activeComponent, handleButtonClick }}>
      {children}
    </AppContext.Provider>
  );
};
