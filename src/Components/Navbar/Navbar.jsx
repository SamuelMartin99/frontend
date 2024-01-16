import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Navbar.css';
import logo from '../Images/Logo-nova.png';
import carrito from '../Images/carrito-48px.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 767;
      setMenuOpen(isSmallScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const navItems = [
    { label: 'Inicio', Link: '/inicio' },
    { label: 'Productos', Link: '/productos', submenu: ['REMERAS', 'HOODIES', 'CAMPERAS', 'ACCESORIOS', 'COMPLEMENTOS PARA REGALO', 'XMAYOR', 'PANTS'] },
    { label: 'Contacto', Link: '/contacto/' },
    { label: 'TALLES', Link: '/talles/' },
    { label: 'Política de Devolución', Link: '/devolucion/' },
  ];

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
          {(!isMenuOpen && !isModalOpen) && (
            <ul className={`nav-list`}>
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

          {/* Botón para abrir el modal */}
          <button onClick={toggleModal}>Abrir Modal</button>

          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Ejemplo de Modal"
            className="custom-modal"
          >
            <h2>Contenido del Modal</h2>
            {navItems.map((item, index) => (
              <div key={index}>
                <Link to={item.Link}>{item.label}</Link>
              </div>
            ))}
            <button onClick={toggleModal}>Cerrar Modal</button>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
