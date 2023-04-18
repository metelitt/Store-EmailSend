import React, { useContext } from 'react';
import axios from '../../utils/Axios';
import {Link,useNavigate} from "react-router-dom"
import "./Login.scss"
import { CustomContext } from '../../utils/Context';
function Login(props) {

    const {user,setUser} =useContext(CustomContext)
    const navigate=useNavigate()
    const LoginUser=(e)=>{
        e.preventDefault()
        let NewUser={
            email:e.target[0].value,
            password:e.target[1].value
        }
        axios.post('/login',NewUser)
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
            <form action='' className='form' onSubmit={LoginUser}>
            <h2 className='form__title'>Вход в SULTAN
            </h2>
            <input type="email" className='form__field' placeholder='Email'/>
            <input type="password" 
            className='form__field' placeholder='Пароль'/> 
            <div className='form__create'>
              <Link to='/register'>Создать аккаунт</Link>
              </div>
            <button type="submit" className='form__btn'>Войти</button>
            </form>
        </div>
    );
}

export default Login;