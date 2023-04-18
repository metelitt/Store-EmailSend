import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ShowItems.module.scss'

function ShowItems(props) {
    return (
        <div>
            <Row>
                <Col xs={6}>
                    <div className={styles.ShowImg}>
            <img src={"./img/" + props.item.url} alt={props.item.name}/>
                    </div>
                </Col>
                <Col>
            <h1>{props.item.name}</h1>
            <div className={styles.size}>
            <p>{props.item.sizeimg}</p>
            <p>{props.item.size}</p>
            </div>
            <div className={styles.Price}>
            <p>{props.item.price}</p>
            <button>-</button>
            <button>+</button>
            </div>
            <p>Штрихкод:<span>{props.item.code}</span></p>
            <p>Производитель:<span>{props.item.prod}</span></p>
            <p>Бренд:<span>{props.item.brand}</span></p>
            <button onClick={()=>props.onAdd(props.item)}>В КОРЗИНУ</button>
            </Col>
            </Row>
        </div>
    );
}

export default ShowItems;