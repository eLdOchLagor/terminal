import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [chars, setNumberOfChars] = useState(1);

  function changeInput(event){
    setNumberOfChars(event.target.value.length);
  }
  
  const style = {
    width: chars*20 + "px"
  };

  return (
    <div className="App">
      <p>[ludwig_boge@bogecorp ~]$ </p> 
      <input style={style} type="text" onChange={changeInput}/>
      <div id="commandLine"></div>
    </div>
  );
}

export default App;
