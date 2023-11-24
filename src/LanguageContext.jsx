import React, { createContext, useContext, useState } from 'react';


const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(true);

    const toggleLanguage = () => {
        setLanguage(!language);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};



export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe ser utilizado dentro de un LanguageProvider');
    }
    return context;
};
