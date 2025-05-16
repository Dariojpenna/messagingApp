import {handleChange}  from '../../../services/handleChangeService.js'
import {loginUser} from '../../../services/authService.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchCSRFToken } from '../../../services/CSRFTokenService.js'

const LoginComponent = ({setIsAuthenticated}) => {
    const [formData, setFormData] = useState({
            username:'',
            password:'',
        })

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try{

            await fetchCSRFToken();

            const token = await loginUser(formData)
            
            if (token){
                
                localStorage.getItem('authToken',token)
                
                alert("Login successful!");
                setIsAuthenticated(true)
                navigate('/chatwindows')
            }else{
                throw new Error('Login Error')
            }

        }catch(error){
            console.error('Login Error', error)
            alert('Login Error')
        }

    }

    return (
        <div>
            <h1>Log In </h1>
            <form className="login-form" onSubmit={handleLogin}>
                <label className='label-username' htmlFor='username'>Username</label>
                <input className='input-username' type= 'text' id='username' name='username'  onChange={(e)=>handleChange(e,setFormData)} required/>
                <label className='labe-password' htmlFor='password'>Password</label>
                <input className='input-password' type= 'password' id='password' name='password'  onChange={(e)=>handleChange(e,setFormData)} required/>
                <button type='submit '>Login</button>
            </form>
        </div>
    )

}

export default LoginComponent