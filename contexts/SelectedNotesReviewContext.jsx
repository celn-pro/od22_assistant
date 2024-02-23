'use client'
import React, {createContext, useState} from 'react';

export const selectedNotesReviewContext = createContext();

export const SelectedNotesReviewProvider = ({children}) => {
    
  const [selectedNotesReview, setselectedNotesReview] = useState(null);
  

  const toggleSelectedNotesReview = (value) => {
    setselectedNotesReview(value);
  };
  

  return (
    <selectedNotesReviewContext.Provider value={[selectedNotesReview, toggleSelectedNotesReview ]}>
      {children}
    </selectedNotesReviewContext.Provider>
  );
};