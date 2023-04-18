import React, { useEffect} from 'react';
import styles from "./Item.module.scss"
import { FaShoppingCart} from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
function Item() {

    const [item,setItem]=useState([])

    useEffect(()=>{
        axios('http://localhost:8080/items').then(({data})=>{
            setItem(data)
        }).catch((err)=>console.log(err))
    },[])

    return (
            <div className={styles.Items}>
            {item.map((item)=>(
                <div className={styles.Item}>
                    <div className={styles.popular}>{item.popular}</div>
                <div className={styles.ImgItem}>
                <img src={item.url} alt={item.name}/>
                </div>
                <div className={styles.size}>
                <p>{item.size}</p>
                </div>
                <h1>{item.name}</h1>
                <p>Штрихкод:<span>{item.code}</span></p>
                <p>Производитель:<span>{item.prod}</span></p>
                <p>Бренд:<span>{item.brand}</span></p>
                <div className={styles.PriceBtn}>
                <p className={styles.OldPrice}>{item.Oldprice}</p>
                <p className={styles.NewPrice}>{item.NewPrice}</p>
                <button>В КОРЗИНУ <FaShoppingCart size="17px"/></button>
                </div>
            </div>
            ))}
            </div>
    );
}

export default Item;