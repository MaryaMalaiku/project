import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Item from './components/ItemCar/index';


function App() {
  return (
    <div className="App">
      <Item title="Car" imageSrc='https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg'/>       
    </div>
  );
}

export default App;
