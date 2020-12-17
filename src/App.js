import './App.scss';
import Card from './components/Card/index';

const data = [
  {
    front: {text_eng: "time"}, 
    back: {text_ukr: "час"}
  },

  {
    front: {text_eng: "information"},
    back: {text_ukr: "інформація"}
  },

  {
    front: {text_eng: "people"},
    back: {text_ukr: "люди"}
  },

  {
    front: {text_eng: "thing"},
    back: {text_ukr: "річ"}
  },

  {
    front: {text_eng: "community"},
    back: {text_ukr: "спільнота"}
  },

  {
    front: {text_eng: "man"},
    back: {text_ukr: "чоловік"}
  },

  {
    front: {text_eng: "woman"},
    back: {text_ukr: "жінка"}
  },

  {
    front: {text_eng: "way"},
    back: {text_ukr: "шлях"}
  },

  {
    front: {text_eng: "life"},
    back: {text_ukr: "життя"}
  },

  {
    front: {text_eng: "child"},
    back: {text_ukr: "дитина"}
  },
]

function App() {
  return (
    <div className="App">
      <div className='Cards'>
        <Card text={data[0]}/>
        <Card text={data[1]}/>
        <Card text={data[3]}/>
        <Card text={data[4]}/>
        <Card text={data[5]}/>
        <Card text={data[6]}/>
        <Card text={data[7]}/>
        <Card text={data[8]}/>
        <Card text={data[9]}/>
      </div>
    </div>
  );
}

export default App;
