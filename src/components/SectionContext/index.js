import { useState, createContext } from 'react'

const SectionContext = createContext()

function SectionProvider({ children }) {
    const [currentSection, setCurrentSection] = useState('home')

    const value = {
        currentSection,
        setCurrentSection
    }

    return (
        <SectionContext.Provider value={value}>
            {children}
        </SectionContext.Provider>
    )
}

export { SectionContext, SectionProvider }