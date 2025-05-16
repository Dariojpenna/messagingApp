import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { handleChange } from "../../../services/handleChangeService"

const RegisterComponent = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        email:'',
        country_code:'',
        phone_number:''
    })

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()

        try{
            const response = await fetch('http://127.0.0.1:8000/messenger/register/',{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            })

            const data = response.json()

            if(response.ok){
                alert('User create succesfuly')
                navigate('/')
            }else{
                throw new Error (data.message || 'Error creating a user')
            }

        }catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            <h1>Sing Up </h1>
            <form className="login-form" onSubmit={handleRegister}>
                <label className='label-username' htmlFor='username'>Username</label>
                <input className='input-username' type='text' id='username' name='username'  onChange={(e)=>handleChange(e,setFormData)} required/>
                <label className='label-password' htmlFor='password'>Password</label>
                <input className='input-password' type='password' id='password' name='password'   onChange={(e)=>handleChange(e,setFormData)} required/>
                <label className='label-email' htmlFor='email'>Email</label>
                <input className='input-email' type='text' id='email' name='email'   onChange={(e)=>handleChange(e,setFormData)} required/>
                <label className='label-phone-number' htmlFor='phone_number'>Phone Number</label>
                <select name="country_code" onChange={(e)=>handleChange(e,setFormData)} required>
                    <option value="+1">🇺🇸  (+1)</option>
                    <option value="+44">🇬🇧 (+44)</option>
                    <option value="+49">🇩🇪  (+49)</option>
                    <option value="+33">🇫🇷  (+33)</option>
                    <option value="+34">🇪🇸  (+34)</option>
                    <option value="+39">🇮🇹  (+39)</option>
                    <option value="+55">🇧🇷  (+55)</option>
                    <option value="+7">🇷🇺  (+7)</option>
                    <option value="+81">🇯🇵  (+81)</option>
                    <option value="+86">🇨🇳  (+86)</option>
                    <option value="+91">🇮🇳  (+91)</option>
                    <option value="+61">🇦🇺  (+61)</option>
                    <option value="+64">🇳🇿   (+64)</option>
                    <option value="+27">🇿🇦   (+27)</option>
                    <option value="+52">🇲🇽  (+52)</option>
                    <option value="+54">🇦🇷  (+54)</option>
                    <option value="+57">🇨🇴  (+57)</option>
                    <option value="+90">🇹🇷  (+90)</option>
                    <option value="+82">🇰🇷  Korea (+82)</option>
                    <option value="+62">🇮🇩  (+62)</option>
                </select>
                <input className='input-phone-number' pattern="\d{10}" type='text' id='phone_number' name='phone_number' onChange={(e)=>handleChange(e,setFormData)} required/>
                <button type='submit '>Submit</button>
            </form>
        </div>
    )
}

export default RegisterComponent