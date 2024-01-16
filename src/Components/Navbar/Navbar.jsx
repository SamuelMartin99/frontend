import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Images/Logo-nova.png';
import carrito from '../Images/carrito-48px.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
  // Estados para controlar el estado del botón y la barra lateral
  const [isButtonOpen, setButtonOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Función para abrir el botón y la barra lateral
  const openButton = () => {
    setButtonOpen(true);
    setMenuOpen(true);

  };

  // Función para cerrar el botón y la barra lateral
  const closeButton = () => {
    setButtonOpen(false);
    setMenuOpen(false);

  };

  // Efecto para manejar el cambio en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 767;

      setButtonOpen(isSmallScreen);

      //abrir el menu solo si es una pantalla chica y el boton no esta ya abierto

      if (isSmallScreen && !isButtonOpen) {
        setMenuOpen(true);

      } else {
        setMenuOpen(false);
      }
    };


    handleResize();

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isButtonOpen]);

  // Definición de elementos del menú y submenús
  const navItems = [
    { label: 'Inicio', Link: '/inicio' },
    { label: 'Productos', Link: '/productos', submenu: ['REMERAS', 'HOODIES'] },
    { label: 'Contacto', Link: '/contacto/' },
    { label: 'TALLES', Link: '/talles/' },
    { label: 'Política de Devolución', Link: '/devolucion/' },
  ];

  // Renderizado del componente
  return (
    <nav>


      <div className="main-nav">
        <div className="nav-top">

          <div className='logo-nav' id='logo'>
            <img src={logo} alt="nova-logo" id='nova-png' />
            <p>shopping market</p>
          </div>

          <div className='carro' id='carrito-compras'>

            <div className='login-button'>
              <button id="login-button">LOGIN</button>
            </div>
            <img src={carrito} alt="icon-compras" />

          </div>



        </div>



        <div className="nav-bot">

          {/* <div className='main-nav'> */}

          <div className="sidebar">

            {isButtonOpen ? (
              // Mostrar el botón si la pantalla es pequeña
              <button onClick={isMenuOpen ? closeButton : openButton} className='responsive-button menu'>
                ☰
              </button>
            ) : (
              // Mostrar la lista de navegación si la pantalla es lo suficientemente grande
              <ul className={`nav-list ${isButtonOpen ? 'open' : ''}`}>
                {navItems.map((item, index) => (
                  <li key={index} className={`nav-item ${item.submenu ? 'dropdown' : ''}`}>
                    <Link to={item.Link}>{item.label}</Link>
                    {item.submenu && (
                      <div className="dropdown-content">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link key={subIndex} to={`/${subItem.toLowerCase()}/`}>{subItem}</Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}



            {isMenuOpen && (
              // Mostrar la barra lateral si está abierta
              <div >
                <ul className='sidebar-container'>
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.Link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>



              </div>
            )}
          </div>



        </div>



      </div>

    </nav>
  );
};

export default Navbar;