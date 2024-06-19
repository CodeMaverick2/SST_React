import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
function App() {
  console.log(a, b);
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
