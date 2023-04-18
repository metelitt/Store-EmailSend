import React from 'react';
import styles from "./HeaderInfo.module.scss"

function HeaderInfo({link,text,fontAwesome}) {
    return (
        <div className={styles.HeaderInfo}>
            <p className={styles.font}>{fontAwesome}</p>
            <div>
                <a className={styles.headerInfoTop}>{link}</a>
                <p className={styles.headerInfoDown}>{text}</p>
            </div>
        </div>
    );
}

export default HeaderInfo;