import './App.css';
import RoutesMap from './components/RoutesMap/RoutesMap';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <RoutesMap />
    </CartProvider>
  );
}

export default App;
