import React, { Component } from 'react';

import styles from "./Categories.module.scss"
export class Categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[
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
        }
    }

    render() {
        return (
            <div>
                {this.state.categories.map(el=>(
                    <p  className={styles.Categories} key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</p>
                ))}
            </div>
        );
    }
}

export default Categories;