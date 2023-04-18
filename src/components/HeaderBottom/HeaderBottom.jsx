import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderBottom.module.scss';
import img from "../../img/SultanLogo.png";
import img2 from "../../img/CallCenter2.png"
import { FaBorderAll,FaSearch,FaDownload,FaShoppingCart } from "react-icons/fa";

function HeaderBottom() {
    let navigate=useNavigate();
    const handleClick=()=>{
        navigate('/catalog')
    }
    const handleClick2=()=>{
        navigate('/basket')
    }
    const LinktoMain=()=>{
        navigate('/')
    }
    return (
        <div className={styles.HeaderBottom}>
            <img className={styles.img} src={img} onClick={LinktoMain}></img>
            <button className={styles.catalog} onClick={handleClick}>Каталог &nbsp;<FaBorderAll size="19px"/></button>
            <div className={styles.inputSearch}>
                <input id="search-input" placeholder="Поиск..." className={styles.input}/>
                <button className={styles.searchBtn}><FaSearch size="19px" color='white'/></button>
            </div>
            <div className={styles.info}>
                <a href='tel:+77774900091' className={styles.tel}>+7 (777) 490-00-91</a>
                <p className={styles.time}>время работы: 9:00-20:00</p>
                <a href="#" className={styles.call}>Заказать звонок</a>
            </div>
            <img className={styles.img2} src={img2}></img>
            <button className={styles.pricebtn}>Прайс-лист<FaDownload/></button>
            <FaShoppingCart color='#3F4E65' size='30px' onClick={handleClick2}/>
            <div className={styles.cost}>
                <p className={styles.basket}>Корзина</p>
                <p className={styles.price}>Цена</p>
            </div>
        </div>
    );
}

export default HeaderBottom;