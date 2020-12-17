import React from 'react'
import styles from './CardBack.module.scss'

function CardBack(props) {

const {text_ukr} = props.backData;

    return (
        <div className={styles.back__block}>
            <p className={styles.back__text}>{text_ukr}</p>
        </div>
    );
}


export default CardBack;