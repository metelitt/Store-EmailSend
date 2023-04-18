import React from 'react';
import styles from "./NavbarItem.module.scss"
function NavbarItem(props) {
    return (
       
        <li className={styles.NavbarItem}>
        <a className={styles.NavbarItems} href={'#'+props.menuItem.toLowerCase()}>{props.menuItem}</a>
        </li>
      
    );
}

export default NavbarItem;