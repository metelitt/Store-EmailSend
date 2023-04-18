import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import styles from "./BasketItems.module.scss"
const showOrders=(props)=>{
    let summa=0
    props.orders.forEach(el=>summa+=Number.parseFloat(el.price))
    return(
        <div>
            <h1 className={styles.BasketText}>Корзина</h1>
            {props.orders.map(el=>(
        <BasketItem key={el.id} item={el} onDelete={props.onDelete}/>
    ))}
    <div className={styles.Order}>
    <button>Оформить заказ</button>
    <p>{new Intl.NumberFormat().format(summa)}₸</p>
    </div>
        </div>
        )
}

const showNothing=()=>{
    return(
        <div><h2>Товаров нет</h2></div>
    )
}

function BasketItems(props) {
    return (
        <div>
            {props.orders.length>0 ? 
            showOrders(props): showNothing()}
        </div>
    );
}

export default BasketItems;