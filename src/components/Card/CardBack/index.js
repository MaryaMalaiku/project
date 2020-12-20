import React from 'react'
import styles from './CardBack.module.scss'

function CardBack(props) {

const {description} = props.backData;

    return (
        <div className={styles.backBlock}>
            <p className={styles.backBlock__description}>{description}</p>
        </div>
    );
}


export default CardBack;