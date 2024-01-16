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
            <Routes>
              <Route path='/inicio' element={<Inicio category='inicio'/>} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/talles' element={<Talles />} />
              <Route path='/devolucion' element={<Devolucion />} />
            </Routes>
          </header>

        

      </BrowserRouter>
    </div>
  );
}

export default App;
