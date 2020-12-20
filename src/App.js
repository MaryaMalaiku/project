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

  render() {
    return (
      <div className="App">
        <div className='cards'>

          { this.state.car.map (element => <Card text={element}/>) }

        </div>
      </div>
    );
  }

}

export default App;
