import React, { useEffect, useState } from 'react'
// IMPORT USE navigator
import { useNavigate } from 'react-router-dom'
import { auth } from '../tools/firebase'
// CREATE CONTEXT
export const UserContext = React.createContext()

// CREATE COMPONENT
const AuthContext = ({ children }) => {
    // SAVE USER
    const [user, setUser] = useState({})
    // SHOW AND UNSHOW LOADING PAGE
    const [loading, setLoading] = useState(true)

    // create navigate
    const navigate = useNavigate()


    useEffect(() => {
        auth.onAuthStateChanged(usero => {
            setUser(usero)
            setLoading(false)
            user && navigate('/chats')
        })

    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext
