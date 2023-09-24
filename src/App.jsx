import React from 'react'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import AuthContext from './context/AuthContext'
import Layout from './components/layout/layout'
axios.defaults.baseURL = 'https://api.chatengine.io'


const App = () => {
    return (
        <AuthContext>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/chats' element={<Layout />} />

            </Routes>
        </AuthContext>
    )
}

export default App
