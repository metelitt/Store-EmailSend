import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Types.module.scss"
function Types(props) {
    const categories=[
        {
            key:'body',
            name:"Уход за телом"
        },
        {
            key:'arm',
            name:"Уход за руками"
        },
        {
            key:'leg',
            name:"Уход за ногами"
        },
        {
            key:'face',
            name:"Уход за лицом"
        },
        {
            key:'hair',
            name:"Уход за волосами"
        },
        {
            key:'tan',
            name:"Средства для загара"
        },
        {
            key:'shav',
            name:"Средства для бритья"
        },
        {
            key:'present',
            name:"Подарочные наборы"
        },
        {
            key:'gigien',
            name:"Гигиеническая продукция"
        },
        {
            key:'mouth',
            name:"Гигиена полости рта"
        },
        {
            key:'paper',
            name:"Бумажная продукция"
        },
    
    ]
    const navigate=useNavigate()
    return (
        <div className={styles.Types}>
          <div className={styles.Types}>
                {categories.map(el=>(<button onClick={()=>navigate(`/catalogItem/${el.key}`)} className={styles.btn} key={el.key}>{el.name}</button>))}
          </div>
        </div>
        );
}

export default Types;





