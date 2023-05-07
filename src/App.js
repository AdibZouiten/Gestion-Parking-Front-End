import './App.css'
import Home from './pages/Home'
import AddForm from './components/AddForm/AddForm'
import Search from './components/Search/Search'
import Display from './components/Display/Display'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddForm" element={<AddForm />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Display" element={<Display />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
