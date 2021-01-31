import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer/footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import City from './pages/City'
import RestaurantDetail from './pages/RestaurantDetail'



class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/city/:city_id" component={City}></Route>
        <Route path="/restorant/:restaurant_id" component={RestaurantDetail}></Route>
        <Footer />
      </Router>
    )
  }
}

export default App
