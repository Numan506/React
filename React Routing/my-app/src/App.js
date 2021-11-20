import React from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Login from './Pages/Login'
import{Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'

// import Mytable from './Mytable'



export default function App() {
  return (
  <Router>     
    <div>
      <ul>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/about">About</Link></li>
         <li> <Link to="/contact">Contact</Link></li>
         <li> <Link to="/login">Login</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/login" component={Login} />
        

      
    </div>
  </Router>  
  )
}
