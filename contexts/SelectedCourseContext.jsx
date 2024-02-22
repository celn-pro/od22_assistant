'use client'
import React, {createContext, useState} from 'react';

export const selectedCourseContext = createContext();

export const SelectedCourseProvider = ({children}) => {
    
  const [selectedCourse, setSelectedCourse] = useState(null);
  

  const toggleSelectedCourse = (value) => {
    setSelectedCourse(value);
  };
  

  return (
    <selectedCourseContext.Provider value={[selectedCourse, toggleSelectedCourse ]}>
      {children}
    </selectedCourseContext.Provider>
  );
};