import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bottom from './Components/Bottom';

import Footer from './Components/Footer';

import Menu from './Components/Menu';

import {Switch, Route}from 'react-router-dom'
import Home from './Components/Pages/Home';
function App() {
  return (
    <div>
   
    <Menu/>
    <Home/>
    <Bottom/>
    <Footer/>
    </div>
  );
}

export default App;
