import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Shopping Cart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/product">View Products</Link>
              <Link className="nav-link" to="/add">Add Product</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
