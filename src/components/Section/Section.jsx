import React from 'react';
import styles from "./Section.module.scss"

function section(props) {
    return (
       <section className={styles.Section}>
{props.children}      
       </section>
    );
}

export default section;