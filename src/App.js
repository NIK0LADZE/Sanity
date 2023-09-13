import Header from './Header';
import Manufacturer from './Manufacturer';

import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mt-20 grid grid-cols-12'>
        <Manufacturer />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
