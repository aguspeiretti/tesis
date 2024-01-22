import logo from "../../assets/Recurso-3.png";
import { NavLink } from "react-router-dom";
import "./opciones.css";
import Crm from "../crm/Crm";
import { useState } from "react";
import Crm2 from "../crm2/Crm2";
import Crm3 from "../crm3/Crm3";
import Crm4 from "../crm 4/Crm4";

const Opciones = () => {
  const [select, setSelect] = useState("opcion4");

  const handleSelect = (value) => {
    setSelect(value);
  };

  return (
    <>
      <div className="headerContainer1">
        <div className="itemCont">
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
          <div onClick={() => handleSelect("opcion3")} className="opcion">
            Opcion 3
          </div>
          <div onClick={() => handleSelect("opcion4")} className="opcion">
            Opcion 4
          </div>
        </div>

        {/* <div className="buttonContainer">Presupuesto</div> */}
      </div>
      {select == "opcion1" ? (
        <div>
          <Crm4 />
        </div>
      ) : select == "opcion2" ? (
        <div>
          <Crm3 />
        </div>
      ) : select == "opcion3" ? (
        <div>
          <Crm />
        </div>
      ) : select == "opcion4" ? (
        <div>
          <Crm2 />
        </div>
      ) : null}
    </>
  );
};

export default Opciones;
