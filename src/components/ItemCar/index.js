import React from 'react'
import styles from './ItemCar.module.scss'

class ItemCar extends React.Component {

constructor() {

  super();

  this.state = {
    showDes: false,
    liked: false,
  }

}

showHideDesc = function () {
  this.setState({
    showDes: !this.state.showDes,
  })
}

likeThis = function () {
  this.setState(
    { liked: !this.state.liked, }
  )
}

render() {
  console.log(this);

  const {title, imageSrc} = this.props;
  return (
    <div className={styles.carItem}>
        <img src={imageSrc} alt="car.png" className={styles.carItem__picture}/>
        <h3 className = {styles.title}>{title}</h3>
        {/* <p className={styles.description}>Going by the results of this year’s JD Power Initial Quality Survey, though, that’s all wrong. “It’s almost the complete reverse,” says Dave Sargent, who oversees Power's vehicle quality research.</p> */}
      
        <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
          
          <button type="button" className={this.state.liked ? styles.carItem__liked : styles.carItem__to_like } onClick={()=> {this.likeThis()}}>
            { this.state.liked ? 'Remove' : 'Save' }
          </button>
            
          <button type="button" onClick={() => {
              this.showHideDesc();
            }}>
              { this.state.showDes ? 'Hide' : 'Show'} description
          </button>

        </div>

        { this.state.showDes ?
            <p className="description">Going by the results of this year’s JD Power Initial Quality Survey, though, that’s all wrong. “It’s almost the complete reverse,” says Dave Sargent, who oversees Power's vehicle quality research.
            </p> : null
            }

    </div>
  );
}

}

export default ItemCar;