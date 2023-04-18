import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import styles from "./Navbar.module.scss"
function Navbar(props) {
    const listMenu=["О компании","Доставка и оплата","Возврат","Контакты"]
    return (
            <nav>
                <ul className={styles.Navbar}>
{
    listMenu.map((elem,i)=>(
        <NavbarItem menuItem={elem} key={i}/>
    ))
}

                </ul>
            </nav>
            
    );
}

export default Navbar;