import './App.css';
import Trivia from './components/trivia-main'
import axios from 'axios'
import React, {setState} from 'react';

//this.setState({content: response.data}))
function App() {
  const getRealData = () => {
    axios.get('trivia-data/trivia-data.json', { headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    .then(response => console.log(response) )
    .catch(error => console.log('err:', error))
  }
  return (
    <div className="App">
      <div className="trivia-container">
        <button onClick={getRealData}>Get Data</button>
        <Trivia getRealData={getRealData}/>
      </div>
    </div>
  );
}

export default App;
