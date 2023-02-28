import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Menucard from './Component/Menucard/Menucard';
import HomeInterior from './Component/HomeInterior/HomeInterior';
import Catlogdesign from './Component/Catlogdesign/Catlogdesign';
import 'bootstrap/dist/css/bootstrap.min.css';
import MegaPlateform from './Component/MegaPlateform/MegaPlateform';
import Footer from './Component/Footer/Footer';
import Carddesign from './Component/Carddesign/Carddesign';
import About from './Component/About/About';







function App() {
  return (
    <div className="App">
      <Header/>
     <Menucard/>
     <HomeInterior/>
    <Catlogdesign/>
    <MegaPlateform/>
    <Carddesign/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
