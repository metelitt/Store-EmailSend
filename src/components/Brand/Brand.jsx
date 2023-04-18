import React from 'react';
import {FaSearch} from "react-icons/fa";
import styles from "./Brand.module.scss"
function Brand(props) {
    let ManArr=[{
        id:1,
        name:"Nivea"
                },
                {
        id:2,
        name:"GRIFON"
                },
                {
        id:3,
        name:"Домашний сундук"
                },
                {
        id:4,
        name:"HELP"
                },
                {
        id:5,
        name:"Nivea"
                },
                {
        id:6,
        name:"GRIFON"
                }
            ]
    return (
        <div className={styles.Manufacturer}>
            <h1>Производитель</h1>
            <div className={styles.inputSearch}>
                <input id="search-input" placeholder="Поиск..." className={styles.input}/>
                <button className={styles.searchBtn}><FaSearch size="19px" color='white'/></button>
            </div>
            <div>
                {ManArr.map(el=><p className={styles.ManArr} key={el.id}>{el.name}</p>)}
            </div>
        </div>
    );
}

export default Brand;