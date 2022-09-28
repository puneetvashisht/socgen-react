
import './App.css';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <AddProduct></AddProduct>
      <hr/>
      <ProductList></ProductList>
      <hr/>
      <Product></Product>
    </div>
  );
}

export default App;
