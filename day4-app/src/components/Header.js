import React from 'react'
import { connect } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'


const Header = (props)=> {
    let navigate = useNavigate();
    console.log('In header component', props.loggedIn);

    const logout = () => {
        props.onLogout();
    }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/home">Home</Link>
              {!props.loggedIn.auth && <Link className="nav-link" to="/login">Login</Link>}
              {props.loggedIn.auth && <Link className="nav-link" onClick={logout}>Logout</Link>}
            </div>
          </div>
        </div>
      </nav>
  )
}


const mapStateToProps = (state)=> {
    console.log('In the header component ', state);
    return {
      loggedIn: state
    }
  }
const mapDispatchToProps = (dispatch)=> {
    return {
      onLogout: () =>  { dispatch({type:'LOGOUT'})}
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);
