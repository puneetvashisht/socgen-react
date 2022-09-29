import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login';
import {combineReducers, createStore} from 'redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { Provider } from 'react-redux';
import authReducer from './store/authReducer';
import productReducer from './store/productReducer';
import ProductList from './components/ProductList';
import Product from './components/Product';
import AddProduct from './components/AddProduct';

// 1. create a single store for entire application
const store = createStore(combineReducers({authReducer, productReducer}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="viewproducts" element={<ProductList />} />
        <Route path="products" element={<Product />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
