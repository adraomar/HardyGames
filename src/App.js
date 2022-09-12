import './App.css';
import RoutesMap from './components/RoutesMap/RoutesMap';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <RoutesMap>
        <Header />
        <Footer />
      </RoutesMap>
    </CartProvider>
  );
}

export default App;
