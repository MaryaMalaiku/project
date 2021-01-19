import React from 'react'
import styles from './CardBack.module.scss'

function CardBack(props) {

const cardDescription = props.backData.description;

    return (
        <div className={styles.backBlock}>
            <div className="description">
                {cardDescription.length > 300 ? `${cardDescription.slice(0, 297)}...` : cardDescription}
            </div>
            <p className={styles.backBlock} target="_blank">See more</p>
        </div>
    );
}


export default CardBack;