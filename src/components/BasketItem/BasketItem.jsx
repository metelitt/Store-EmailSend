import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from "./BasketItem.module.scss"
function BasketItem(props) {
    return (
        <div className={styles.BasketItem}>
            <div className={styles.ImgItem}>
            <img src={"./img/" + props.item.url} alt={props.item.name}/>
            </div>
            <div className={styles.Info}>
            <div className={styles.size}>
            <p>{props.item.sizeimg}</p>
            <p>{props.item.size}</p>
            </div>
            <h1>{props.item.name}</h1>
            <p className={styles.Desk}>{props.item.desc}</p>
            </div>
            <div className={styles.Sum}>
                <div className="count__controls">
                <button type='button' className='count__down'>-</button>
                </div>
                <div className="count__box">
                    <input type="number" className={styles.countInput} min="1" max="50" value={props.item.count}/>
                </div>
                <div className="count__controls">
                <button type='button' className='count__up'>+</button>
                </div>
            </div>
            <p className={styles.Price}>{props.item.price*props.item.count}</p>
            <div className={styles.PriceBtn}>
                <button onClick={()=>props.onDelete(props.item.id)} className={styles.Btn}><FaTrash color="white"></FaTrash></button>
            </div>
        </div>
    );
}

export default BasketItem;