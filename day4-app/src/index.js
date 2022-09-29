import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login';
import {createStore} from 'redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { Provider } from 'react-redux';

const initialState = {
  auth: false
}

// 1. create a single store for entire application
const store = createStore((state = initialState, action)=> {
  switch(action.type){
      case 'LOGIN': 
          console.log('Login action .... ')
          return {auth: true}
      
      case 'LOGOUT': 
          return {auth: false}

      default:
        return state
      
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
