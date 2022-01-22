import './App.css';
import getApi from './Fetch';


function App() {
  
 
  return (
    <div className="App">
      <h1>working</h1>
      <button onClick={getApi()}>Fetch</button>
    </div>
  );
}

export default App;
