import React from 'react';
import './MainImg.scss'
import Section from '../Section/Section';
function MainImg(props) {
    return (
        <div className='MainImg'>
            <Section>
            <div className='MainImg__content'>
            <h1>Бытовая химия, косметика и хозтовары</h1>
            <p>оптом по кокчетаву и области</p>
            <button>В КАТАЛОГ</button>
            </div>
            </Section>
        </div>
    );
}

export default MainImg;