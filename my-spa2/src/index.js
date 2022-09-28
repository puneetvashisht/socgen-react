import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewCitizens from './components/ViewCitizens';
import AddCitizens from './components/AddCitizens';
import UpdateCitizen from './components/UpdateCitizen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="viewcitizens" element={<ViewCitizens/>}/>
        <Route path="addcitizen" element={<AddCitizens/>}/>
        <Route path="updatecitizen/:citizenId" element={<UpdateCitizen/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
