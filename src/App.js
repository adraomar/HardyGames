import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="mb-3">
        <Navbar />
      </header>
      <main className="bg-dark">
      <div className="container">
        <div className="text-dark">
          <ItemListContainer titulo="Gaming Partners"></ItemListContainer>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
