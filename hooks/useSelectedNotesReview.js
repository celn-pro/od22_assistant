'use client'
import {selectedNotesReviewContext} from "../contexts/SelectedNotesReviewContext";
import {useContext} from "react";

export const useSelectedNotesReview  = ()=>{
    
    return useContext(selectedNotesReviewContext);
}
