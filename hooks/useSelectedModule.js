'use client'
import {selectedModuleContext} from "../contexts/SelectedModuleContext";
import {useContext} from "react";

export const useSelectedModule  = ()=>{
    
    return useContext(selectedModuleContext);
}
