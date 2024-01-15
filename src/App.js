import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';
import Contacto from './Pages/Contacto';
import Talles from './Pages/Talles';
import Devolucion from './Pages/Devolucion';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path='/inicio' Component={<Inicio />} />
            <Route path='/productos' Component={<Productos />} />
            <Route path='/contacto' Component={<Contacto/>} />
            <Route path='/talles' Component={<Talles />} />
            <Route path='/devolucion' Component={<Devolucion />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
