
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import { MyCartContext } from './management/context';

function App() {
  return (
    <div className="App">
      <Header/>
      <Cart/>
    </div>
  );
}

export default App;
