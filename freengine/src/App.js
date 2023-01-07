import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Bottom from './Components/Bottom';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About'
import Services from './Components/Pages/Services';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';
import Default from './Components/Default';


function App() {
  return (
    <div>


      <Menu />
      <Routes>
        <Route exact path='/FreeNgine' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Default/>} />
      </Routes>
      <Bottom />
      <Footer />



    </div>
  );
}

export default App;
