import React from 'react';
import img from "../../img/SultanLogo2.png";
import "./Sultan.scss"
import {FaArrowRight} from "react-icons/fa";
function Sultan(props) {
    return (
        <div className='Sultan'>
            <img  src={img}></img>
            <h1>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</h1>
            <p>Подпишись на скидки и акции</p>

            <div className="inputSearch">
               <input id="search-input" placeholder="Введите ваш E-mail"/>
                <button className="searchBtn"><FaArrowRight size="19px" color='white'/></button>
            </div>
            
        </div>
    );
}

export default Sultan;