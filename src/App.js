import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('https://www.gadget4india.com/release/api/release/').then((response)=>{
      console.log(response)
      console.log('hai')
    })
    console.log('2')
  }, [])
  console.log('3')

  return (
    <div className="App">
      <h1>This is admin of gadget4 india</h1>

    </div>
  );
}

export default App;
