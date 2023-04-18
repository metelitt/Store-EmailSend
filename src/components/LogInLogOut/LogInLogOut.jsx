import React, { useContext } from 'react';
import {FiUser} from "react-icons/fi"
import {BiUserX} from "react-icons/bi"
import "./LogInLogOut.scss"
import { Link, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
function Login(props) {

    const {user,setUser}=useContext(CustomContext)
    const navigate=useNavigate()
    const logOutUser=()=>{
        setUser({
            email:''
        })
        localStorage.removeItem('user')
        navigate('/login')
    }
    return (
        <div className='LogInLogOut'>
            {
                user.email.length ? <span  onClick={logOutUser}>
                    <BiUserX size="25px"/>
            Выйти
                </span> : 
                <span>
                <Link to='/register'>
                    <FiUser size="25px"/>
                    Войти
                </Link>
                </span>
            }
        </div>
    );
}

export default Login;