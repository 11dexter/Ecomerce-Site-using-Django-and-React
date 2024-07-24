import {Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Contact from './component/Contact';
import HomePage from './component/HomePage';
import ProdductDetails from './component/ProdductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSec from './component/MainSec';



function App() {

  return (
    <>
    <NavBar/>
    <Routes>   
      <Route path="/" element={<MainSec/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
