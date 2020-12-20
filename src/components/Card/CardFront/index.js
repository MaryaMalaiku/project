import React from 'react'
import styles from './CardFront.module.scss'

function CardFront(props) {

    const {title, price, imageSrc} = props.frontData;

    return (
        <div className={styles.frontBlock}>
            <img className={styles.frontBlock__img}>{imageSrc}</img>
            <p className={styles.frontBlock__title}>{title}</p>
            <p className={styles.frontBlock__prise}>Prise:{price}</p>
        </div>
    );
}


export default CardFront;