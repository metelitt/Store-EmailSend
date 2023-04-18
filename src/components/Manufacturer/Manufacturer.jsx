import React from 'react';
import styles from "./Manufacturer.module.scss"
import {FaSearch} from "react-icons/fa";
function Manufacturer(props) {
    let ManArr=[{
        id:1,
        name:"Grifon"
                },
                {
        id:2,
        name:"Boyscout"
                },
                {
        id:3,
        name:"Paclan"
                },
                {
        id:4,
        name:"Булгари Гринan"
                },
                {
        id:5,
        name:"Grifon"
                },
                {
        id:6,
        name:"Boyscout"
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

export default Manufacturer;