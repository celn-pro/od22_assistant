'use client'
import {selectedCourseContext} from "../contexts/SelectedCourseContext";
import {useContext} from "react";

export const useSelectedCourse  = ()=>{
    
    return useContext(selectedCourseContext);
}
