import { createContext, useContext, useState } from 'react';

// Create the DND context
const DNDContext = createContext(null);

// DND Provider component
export const DNDProvider = ({ children }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [sections, setSections] = useState([]);

    const handleDragResult = (id) => {
        setDraggedItem(id);
    };

    const handleDrop = () => {
        if (draggedItem) {
            setSections((prevSections) => [...prevSections, draggedItem]);
            setDraggedItem(null);
        }
    };

    return (
        <DNDContext.Provider value={{ draggedItem, sections, setSections, handleDragResult, handleDrop }}>
            {children}
        </DNDContext.Provider>
    );
};

// Custom hook to use the DND context
export const useDNDContext = () => {
    return useContext(DNDContext);
};

export default DNDContext;
