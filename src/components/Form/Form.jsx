import React,{useContext, useState} from 'react';
import axios from '../../utils/Axios';
import "./Form.scss"
import {Link,useNavigate} from "react-router-dom"
import {FaPencilAlt} from "react-icons/fa"
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { CustomContext } from '../../utils/Context'
function Form(props) {

    const [status,setStatus]=useState(false)
    const [email,setEmail]=useState('')
    const [eye,setEye]=useState(false)
    const {user,setUser} =useContext(CustomContext)
    const navigate=useNavigate()

    const registerUser=(e)=>{
        e.preventDefault()

        let newUser={
            email,
            password:e.target[0].value
        }
        
        axios.post('/register',newUser)
        .then(({data})=>{
            setUser({
                token:data.accessToken,
                ...data.user
            })
            localStorage.setItem('user',JSON.stringify({
                token:data.accessToken,
                ...data.user
            }))
            navigate('/')
        })
    }
    return (
        <div className='content'>
            <form action='' className='form' onSubmit={registerUser}>
                {
                    status && <p className='form__email' onClick={()=>setStatus(false)}>{email}<FaPencilAlt/></p>
                }
                
                <h2 className='form__title'>
                {
                    status ? 'Придумай пароль для входа на любом устройстве' : 'Регистрация'
                }
                </h2>
                {
                    status && <>
        <div className='form__password'>
        <input type={eye ? 'text' : 'password'} className='form__field' placeholder='Придумайте пароль'></input>
        <span className='form__eye' onClick={()=>setEye(prev=>!prev)}>
{
    eye ? <AiFillEyeInvisible/> :  <AiFillEye/> 
}
                     </span>
                     </div>
                <button type="submit" className='form__btn'>Создать аккаунт</button>
                </>
                }
                {
                    !status &&
                    <>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className='form__field' placeholder='Введите email'></input>
                <button type="button" className='form__btn' onClick={()=>setStatus(true)}>Продолжить</button>
                <Link to='/login'>У меня есть аккаунт</Link>
                    </>
                }
            </form>
        </div>
    );
}

export default Form;