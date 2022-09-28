import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import {createStore} from 'redux'
import { Provider } from 'react-redux';

let initialState = {
  products: [
      {id: 1, name:'iPhone', description:'from Applee', price: 445455},
      {id: 2, name:'iPad', description:'from Applee', price: 245455}
  ]
}

// 1. create a single store for entire application
const store = createStore((state = initialState, action)=> {
  switch(action.type){
      case 'FETCH_PRODUCTS': 
          console.log('fetching products...');
          return {products: state.products};
      
      case 'ADD_PRODUCT': 
          console.log('add a product...');
          // no mutations of state is allowed
          // state.products.push(action.payload)
          
          return {products: [...state.products, action.payload]};
      case 'DELETE_PRODUCT': 
          let remainingProducts = state.products.filter((p)=> p.id!=action.payload.id)
          return {products: remainingProducts};

      default: 
          console.log('default action...')
          return {products: state.products};
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
