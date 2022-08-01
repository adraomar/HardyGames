import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemListContainer titulo="Gaming Partners"></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
