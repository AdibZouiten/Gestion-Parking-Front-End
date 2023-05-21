import './App.css'
import Home from './pages/Home'
import AddForm from './components/AddForm/AddForm'
import Search from './components/Search/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ParkingDetails from './components/ParkingDetails/ParkingDetails'
import Consulter from './components/Consulter/Consulter'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddForm" element={<AddForm />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Consulter" element={<Consulter />} />
          <Route path="/ParkingDetails/:idPark" element={<ParkingDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
