import React, { Component } from 'react'
import './Styles/Header.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Tnc from './Tnc'
import Search from './Search'
import Login from './Login'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Link to="/"><img src="./Assets/logo.jpg" alt=""/>Bid-Hit</Link>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/search">Search Auction</Link>
                      </li>
                      <li>
                        <Link to="/tnc">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
                </div>

              <h1> Hello </h1>
                <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/tnc' element={<Tnc/>}></Route>
                <Route exact path='/search' element={<Search/>}></Route>
                <Route exact path='/login' element={<Login/>}></Route>
                </Routes>
			</div>
        )
    }
}

export default Header