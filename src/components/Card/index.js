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


      const data = this.props.text;
      const front = {
        title: data.name,
          voteAverage: data.vote_average,
        imageSrc: data.backdrop_path,
      };
      const back = {
        description: data.overview
      };
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

                <button className={styles.card__button_del} onClick={ () => {
                  this.props.deleteCard(this.props.text);
                }
                }>Delete</button>
                
            </div>
        
      );
    }
  
}

export default Card;