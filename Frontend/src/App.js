import logo from './logo.svg';
import './App.css';
import Jokes from './components/containers/jokes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Jokes></Jokes>
      </header>
    </div>
  );
}

export default App;
