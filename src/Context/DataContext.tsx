import { createContext, useContext, useState } from 'react';
import data from "../assets/data/resumeData.json"
const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {

    return (
        <DataContext.Provider value={{data, }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the DND context
export const useDataContext = () => {
    return useContext(DataContext);
};

export default DataContextProvider;
