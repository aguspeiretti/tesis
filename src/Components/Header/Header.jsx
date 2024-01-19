import "./header.css";
import logo from "../../assets/Recurso-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({ onCatSelectedChange }) => {
  const [catSelected, setCatSelected] = useState("");

  const handleCat = (cat) => {
    setCatSelected(cat);
    onCatSelectedChange(cat);
  };

  return (
    <>
      <div className="headerContainer">
        <NavLink className={"logoLink"} to={"/"}>
          <div className="imgContainer">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>

        <div className="linksContainer">
          <ul>
            <li>Home</li>
            <li>Quienes Somos</li>
            <li>FAQ</li>
            <li className="dropdown">
              Servicios
              <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
              <ul className="submenu">
                <li className="subitem1">
                  <a href="#servicios/uno">Asesorías</a>
                </li>
                <li className="subitem dropRight">
                  Redacción
                  <FontAwesomeIcon className="arrowdown" icon={faCaretRight} />
                  <ul className="submenuRight">
                    <li
                      className="subitemRight"
                      onMouseOver={() => handleCat("Tesis")}
                      onMouseLeave={() => handleCat(null)}
                    >
                      <a href="">Tesis</a>
                    </li>
                    <li
                      className="subitemRight"
                      onMouseOver={() => handleCat("Monografia")}
                      onMouseLeave={() => handleCat(null)}
                    >
                      <a href="">Monografía</a>
                    </li>
                    <li
                      className="subitemRight"
                      onMouseOver={() => handleCat("Ensayo")}
                      onMouseLeave={() => handleCat(null)}
                    >
                      <a href="">Ensayo</a>
                    </li>
                    <li
                      className="subitemRight"
                      onMouseOver={() => handleCat("Articulo")}
                      onMouseLeave={() => handleCat(null)}
                    >
                      <a href="">Articulo Cientifico</a>
                    </li>
                    <li
                      className="subitemRight"
                      onMouseOver={() => handleCat("Analisis")}
                      onMouseLeave={() => handleCat(null)}
                    >
                      <a href="">Analisis Estadistico</a>
                    </li>
                    <li
                      className="subitemRight"
                      onMouseOver={() => handleCat("Presentacion")}
                      onMouseLeave={() => handleCat(null)}
                    >
                      <a href="">Presentación</a>
                    </li>
                  </ul>
                </li>
                <li className="subitem1">
                  <a href="#servicios/tres">Correcciones</a>
                </li>
              </ul>
            </li>
            <li>Blog</li>
            <li>Testimonios</li>
          </ul>
          {/* <div className="buttonContainer">Presupuesto</div> */}
          <NavLink to={"/Login"}>
            <div className="buttonContainer2">Login</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
