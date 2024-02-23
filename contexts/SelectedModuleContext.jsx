'use client'
import React, {createContext, useState} from 'react';

export const selectedModuleContext = createContext();

export const SelectedModuleProvider = ({children}) => {
    
  const [selectedModule, setSelectedModule] = useState(null);
  

  const toggleSelectedModule = (value) => {
    setSelectedModule(value);
  };
  

  return (
    <selectedModuleContext.Provider value={[selectedModule, toggleSelectedModule ]}>
      {children}
    </selectedModuleContext.Provider>
  );
};