import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <nav>
    <ul>
      <li>
        <Link to={``}>Home</Link>
      </li>
      <li>
      <Link to={`about`}>About</Link>
      </li>
      <li>
      <Link to={`contact`}>Contact</Link>
      </li>
      <li>
      <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
    <div>home component</div>
    </>
  )
}
