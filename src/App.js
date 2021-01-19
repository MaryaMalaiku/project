import React from 'react'
import './App.scss';
import Card from './components/Card/index';
import carData from './db';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      apiData: [],
      error: 0,
    };

    console.log('constructor');

  }

  deleteCard = (element) => {
    const resumeCars = this.state.apiData.filter( item => item.id !== element.id );
    this.setState({
      apiData: resumeCars
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=4298cee904c2bf07d4c1a191530ce2bc')
    .then((response) => {
      this.setState({
        error: response.status
      })
      return response.json()
    })
    .then((data) => {
      this.setState({
        apiData: data.result,
      })
    })
  }

  render() {
    console.log(this.state.error)
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
