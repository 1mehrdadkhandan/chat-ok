import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { ChatEngine } from 'react-chat-engine'
import { UserContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { auth } from '../../tools/firebase'
const Layout = () => {
    const [loading, setLoading] = useState(true)
    const user = useContext(UserContext)

    const navigate = useNavigate()
    console.log(user)
    useEffect(() => {
            console.log(!user)
        
        
        console.log()
        if (Object.keys(user).length === 0) {

            navigate('/')
            return;
        }

        axios.get('/users/me', {
            headers: {
                "project-id": 'c8079acf-3e5d-439d-a9a0-fd21f3616b36',
                "user-name": user.email,
                "user-secret": user.uid
            }
        }).then(resp => {
            console.log(resp)
            setLoading(false)
        })
            .catch(err => {
                let formData = new FormData()
                formData.append('email', user.email)
                formData.append('username', user.email)
                formData.append('secret', user.uid)
                getPhoto(user.photoURL).then(avatar => {
                    formData.append('avatar', avatar, avatar.name)
                    axios.post('/users/', formData, {
                        headers: {
                            "private-key": '82431803-e637-4274-91d5-d624bb8ac038'
                        }
                    })
                })
            })
        const getPhoto = async (url) => {
            const sendRequest = await fetch(url)
            const profile = await sendRequest.blob()
            return new File([profile], 'profile.jpg', { type: 'image/jpeg' })
        }

    }, [user, history])




    return (
        <div>
            <Navbar />
            {loading ? 'loading ... '  :
                <ChatEngine
                    height='calc(100vh - 50px)'
                    projectID='c8079acf-3e5d-439d-a9a0-fd21f3616b36'
                    userName={user.email}
                    userSecret={user.uid}
                />
            }
        </div>
    )
}

export default Layout
