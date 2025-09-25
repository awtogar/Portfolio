import { createContext, useContext } from "react"

const LenisContext = createContext()

export const useLenis = () => {
    const context = useContext(LenisContext)
    if (!context) {
        throw new Error('useLenis must be used within LenisProvider')
    }
    return context
}

export default LenisContext