import React from 'react'
import './App.scss';
import Card from './components/Card/index';
import carData from './db';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      car: carData,
    };

  }

  deleteCard = (element) => {
    const resumeCars = this.state.car.filter( item => item.id !== element.id );
    this.setState({
      car: resumeCars
    });
  }

  render() {
    return (
      <div className="App">
        <div className='cards'>
          { this.state.car.map ( (element) => { 
            return ( 
            <Card key={element.id} text={element} deleteCard={this.deleteCard}/> 
            ) 
            } 
            )
          }

        </div>
      </div>
    );
  }

}

export default App;
