import './App.css';
import {Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Single Page Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled">Disabled</a> */}
        <Link className="nav-link" to="/contact">Contact</Link> 
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/viewcitizens">View Citizens</Link>
        <Link className="nav-link" to="/addcitizen">Add Citizen</Link>
      </div>
    </div>
  </div>
</nav>
        
     
      <Outlet />
      </div>
  );
}

export default App;
