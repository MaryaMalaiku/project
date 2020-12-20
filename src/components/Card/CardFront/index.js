import React from 'react'
import styles from './CardFront.module.scss'

function CardFront(props) {

    const {title, price, imageSrc} = props.frontData;

    return (
        <div className={styles.frontBlock}>
            <img className={styles.frontBlock__img} src={imageSrc} alt='Car'/>
            <h3 className={styles.frontBlock__title}>{title}</h3>
            <p className={styles.frontBlock__prise}>Prise: {price}</p>
        </div>
    );
}


export default CardFront;