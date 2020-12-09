import React from 'react'
import styles from './ItemCar.module.css'

class ItemCar extends React.Component {

  render() {
    console.log(this);

    const {title, imageSrc} = this.props;
    return (
      <div className={styles.carItem}>
          <img src={imageSrc} alt="car.png" className={styles.carItem__picture}/>
          <h3 className = {styles.title}>{title}</h3>
          <p className={styles.description}>Going by the results of this year’s JD Power Initial Quality Survey, though, that’s all wrong. “It’s almost the complete reverse,” says Dave Sargent, who oversees Power's vehicle quality research.</p>
      </div>
    );
  }

}

export default ItemCar;