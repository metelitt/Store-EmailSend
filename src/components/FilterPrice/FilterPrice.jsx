import React from 'react';
import "./FilterPrice.scss"
function FilterPrice(props) {
    return (
        <div className='FilterPrice'>
            <h1>Подбор по параметрам</h1>
            <p>Цена ₸</p>
            <div>
            <input placeholder='0'></input>
            <p>-</p>
            <input placeholder='10000'></input>
            </div>
        </div>
    );
}

export default FilterPrice;