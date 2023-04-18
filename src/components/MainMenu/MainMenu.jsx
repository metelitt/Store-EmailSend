import React from 'react';
import { Link } from 'react-router-dom';
function MainMenu(props) {
    return (
        <div>
            <header>
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/basket">Карзина</Link></li>
                <li><Link to="/showItem">Товар</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
                <li><Link to="/login">Логин</Link></li>
                <li><Link to="/catalogItem">Логин</Link></li>
                <li><Link to="/email">Логин</Link></li>
            </ul>
        </nav>
        </header>
        </div>
    );
}

export default MainMenu;