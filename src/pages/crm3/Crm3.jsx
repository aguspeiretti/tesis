import PopClientes from "../../Components/PopClientes/PopClientes";
import PopServicios from "../../Components/PopServicios/PopServicios";
import "./crm3.css";

import { useState } from "react";

const Crm3 = () => {
  const [seleccionado, setSeleccionado] = useState("");

  const handleSeleccionado = (seleccion) => {
    setSeleccionado(seleccion);
  };

  return (
    <>
      <div className="crm3Contenedor">
        <div className="navCrm">
          <div onClick={() => setSeleccionado("servicios")} className="boton3">
            Servicios
          </div>
          <div onClick={() => setSeleccionado("clientes")} className="boton3">
            Clientes
          </div>
        </div>
        <div className="contentt">
          {seleccionado == "servicios" ? (
            <div className="popContainerServicios">
              <PopServicios />
            </div>
          ) : seleccionado == "clientes" ? (
            <div className="popContainerServicios">
              <PopClientes />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Crm3;
