import React, { useContext } from 'react'
import style from './navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../tools/firebase'
import { UserContext } from '../../context/AuthContext'
const Navbar = () => {
    const navigate = useNavigate()
    const logout = async () => {
        await auth.signOut()
        navigate('/')
    }
    const context = useContext(UserContext)
    return (
        <div className={style.navbar} >
            <h4 className={style.title}>
                Khandan Gram
            </h4>
            <button onClick={logout} className={style.logout}> Logout </button>
        </div>
    )
}

export default Navbar
