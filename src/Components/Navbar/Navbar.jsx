import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import './Navbar.css';
import logo from '../Images/Logo-nova.png';
import carrito from '../Images/carrito-48px.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };


  const closeMenuAndModal = () => {

    setModalOpen(false);
  };

  const handleOptionClick = () => {
    setModalOpen(false);
  }

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
            <img src={carrito} alt="icon-compras" />
          </div>
          <div className='login-button'>
            <button>Login</button>
          </div>
        </div>

        <div className="nav-bot">
          {(!isMenuOpen && !isModalOpen) && (
            <ul className={`nav-list`}>
              {navItems.map((item, index) => (
                <li key={index} className={`nav-item ${item.submenu ? 'dropdown' : ''}`}>
                  <Link to={item.Link}>{item.label}</Link>
                  {item.submenu && (
                    <div className="lista-nav">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link key={subIndex} to={`/${subItem.toLowerCase()}/`}>{subItem}</Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}


          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Ejemplo de Modal"
            className="custom-modal"
            overlayClassName="modal-overlay"
          >
            <h2>MENÚ</h2>
            {navItems.map((item, index) => (
              <div key={index}>
                <Link to={item.Link} onClick={handleOptionClick}>{item.label} </Link>
              </div>
            ))}
            {/*<button onClick={handleOptionClick} id='btn-cmodal'>Cerrar Modal</button>*/}
          </Modal>

          {/* Botón para abrir el modal */}
          {!isModalOpen && (

            <button onClick={toggleModal} className='open-modal-button'>
              <FontAwesomeIcon icon={faBars} /> {/* Icono de hamburguesa usando @fortawesome */}
            </button>
          )}



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
