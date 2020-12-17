import React from 'react';
import styles from './Card.module.scss';
import CardBack from "./CardBack";
import CardFront from "./CardFront";

class Card extends React.Component {

    constructor() {

        super();
    
        this.state = {
          isBack: false,
        }
    
      }
    
      cardRot = function () {
        this.setState({
            isBack: !this.state.isBack,
        })
      }


    render() {
      console.log(this);


      const {front, back} = this.props.text;
      const cardClass = [styles.card];
      const {isBack} = this.state;
      if (isBack) { cardClass.push(styles.isBack) }
      return (
        
            <div className={ cardClass.join(' ') } onClick={() => this.cardRot()}>
                <div className={styles.card__Inner}>
                <div className={styles.card__back}>
                   <CardBack backData={back}/>
                </div>

                <div className={styles.card__front}>
                    <CardFront frontData={front}/>
                </div> 

                </div>
                
            </div>
        
      );
    }
  
}

export default Card;