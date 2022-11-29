import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bottom from './Components/Bottom';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Portifolio from './Components/Portifolio';
function App() {
  return (
    <div>
    <Menu/>
    <Hero/>
    <Cards/>
    <Portifolio/>
    <Bottom/>
    <Footer/>
    </div>
  );
}

export default App;
