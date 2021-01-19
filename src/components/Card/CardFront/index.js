import React from 'react'
import styles from './CardFront.module.scss'

function CardFront(props) {

    const {title, voteAverage, imageSrc} = props.frontData;

    return (
        <div className={styles.frontBlock}>
            <img src={imageSrc} className={styles.frontBlock__img}/>
            <div className={styles.frontBlock}>
                <h3 className={styles.frontBlock}>{title}</h3>
                <p>Vote average: <b>{voteAverage}</b></p>
            </div>
        </div>
    );
}


export default CardFront;