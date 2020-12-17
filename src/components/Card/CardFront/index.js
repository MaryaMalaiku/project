import React from 'react'
import styles from './CardFront.module.scss'

function CardFront(props) {

    const {text_eng} = props.frontData;

    return (
        <div className={styles.front__block}>
            <p className={styles.front__text}>{text_eng}</p>
        </div>
    );
}


export default CardFront;