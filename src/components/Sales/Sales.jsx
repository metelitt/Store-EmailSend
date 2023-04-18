import React, { useEffect} from 'react';
import Title from '../Title/Title';
import {FaShoppingCart} from "react-icons/fa";
import axios from 'axios';
import styles from "./Sales.module.scss"
import { useState } from 'react';


function Sales(props) {
    const [sales,setSales]=useState([])

    useEffect(()=>{
        axios('http://localhost:8080/sales').then(({data})=>{
            setSales(data)
        }).catch((err)=>console.log(err))
    },[])


    return (
        <div>
            <Title 
            first="Акционные"
            second="Товары"
            />

            <div className={styles.Sales}>
            {sales.map((item)=>(
                <div className={styles.Item}>
                    <div className={styles.popular}>{item.popular}</div>
                <div className={styles.ImgItem}>
                <img src={item.image} alt={item.name}/>
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
        </div>
    );
}

export default Sales;