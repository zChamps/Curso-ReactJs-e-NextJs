import './App.css';
import {HelloWorld} from './Components/HelloWorld.js';
import {SayMyName} from "./Components/SayMyName.js"

function App() {
  return (
    <div className="App">
      
        <HelloWorld/>
        <SayMyName nome="Willian" />

    </div>
  );
}

export default App;
