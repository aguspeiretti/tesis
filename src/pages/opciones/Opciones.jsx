import logo from "../../assets/Recurso-3.png";
import { NavLink } from "react-router-dom";
import "./opciones.css";
import Crm from "../crm/Crm";
import { useState } from "react";
import Crm2 from "../crm2/Crm2";

const Opciones = () => {
  const [select, setSelect] = useState("");

  const handleSelect = (value) => {
    setSelect(value);
  };

  return (
    <>
      <div className="headerContainer">
        <NavLink className={"logoLink"} to={"/"}>
          <div className="imgContainer">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>
        <NavLink>
          <div onClick={() => handleSelect("opcion1")} className="opcion">
            Opcion 1
          </div>
        </NavLink>
        <NavLink>
          <div onClick={() => handleSelect("opcion2")} className="opcion">
            Opcion 2
          </div>
        </NavLink>

        {/* <div className="buttonContainer">Presupuesto</div> */}
      </div>
      {select == "opcion1" ? (
        <div>
          <Crm />
        </div>
      ) : select == "opcion2" ? (
        <div>
          <Crm2 />
        </div>
      ) : null}
    </>
  );
};

export default Opciones;
