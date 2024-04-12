import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Product from "./Product";
import Brand from "./Brand";
import Home from "./Home";

const Aside = ({ handleMenuClick }) => {

  const [activeComponent, setActiveComponent] = useState(null);

  // Función para manejar el clic en el enlace "Productos"
  const handleProductClick = () => {
    setActiveComponent(<Product />);
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img
          src="../dist/img/InventoryLogo.png"
          alt="Inventory Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Inventory System</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={handleProductClick}
              >
                <i className="nav-icon fas fa-laptop" />
                <p>Productos</p>
              </a>
            </li>

            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-table" />
                <p>
                  Tablas sistema
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link"
                  >
                    <p>Marcas</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>Categorías</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>Ubicaciones</p>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Reportes
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>Productos por marca</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>Productos por ubicación</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
      {/* Renderizar dinamicamente el componente activo */}
    </aside>
  );
};

export default Aside;
