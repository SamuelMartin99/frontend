import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';
import Contacto from './Pages/Contacto';
import Talles from './Pages/Talles';
import Devolucion from './Pages/Devolucion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
          
          <div className="page-container"> {/* Agrega un contenedor para tus páginas */}
            <Routes>
              <Route path='/inicio' element={<Inicio category='inicio' />} />
              <Route path='/productos' element={<Productos category='productos' />} />
              <Route path='/contacto' element={<Contacto category='contacto' />} />
              <Route path='/talles' element={<Talles category='talles' />} />
              <Route path='/devolucion' element={<Devolucion category='devolucion' />} />
            </Routes>
          </div>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
