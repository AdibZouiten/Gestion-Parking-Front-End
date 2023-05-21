import './App.css'
import Home from './pages/Home'
import Ajouter from './components/Ajouter/Ajouter'
import Rechercher from './components/Rechercher/Rechercher'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ParkingDetails from './components/ParkingDetails/ParkingDetails'
import Consulter from './components/Consulter/Consulter'
import LoginPage from './components/LoginPage/LoginPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ajouter" element={<Ajouter />} />
          <Route path="/Rechercher" element={<Rechercher />} />
          <Route path="/Consulter" element={<Consulter />} />
          <Route path="/ParkingDetails/:idPark" element={<ParkingDetails />} />          <Route path="/ParkingDetails/:idPark" element={<ParkingDetails />} />
          <Route path="/LoginPage" element={<LoginPage/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
