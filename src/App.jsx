import './css/globals.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dinosaurios from './pages/Dinosaurios';
import Armas from './pages/Armas';
import Implantes from './pages/Implantes';
import Tecnologias from './pages/Tecnologias';


function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dinosaurios" element={<Dinosaurios />} />
            <Route path="/armas" element={<Armas />} />
            <Route path="/implantes" element={<Implantes />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;