import React, { useState } from "react";
import "./crm4.css";

const Crm4 = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [prevLevel, setPrevLevel] = useState("");
  const [prevService, setPrevService] = useState("");

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
    setSelectedService("");
    setPrevLevel("");
    setPrevService("");
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    setPrevLevel(selectedLevel);
    setPrevService(selectedService);
  };

  const handleBack = () => {
    setSelectedLevel(prevLevel);
    setSelectedService(prevService);
  };

  return (
    <div className="contPrincipal">
      <button id="servicios-btn" onClick={() => setShowPopUp(true)}>
        Servicios
      </button>
      <div className={showPopUp ? "containerAbierto" : "containerCerrado"}>
        {showPopUp && (
          <div id="pop-up" className="popup">
            <h2 className="tituloP">¿Qué servicio estás buscando?</h2>
            <h3 className="selecciona">Selecciona un nivel</h3>
            <select
              className="selecciona"
              id="nivel-select"
              value={selectedLevel}
              onChange={handleLevelChange}
            >
              <option value="">Selecciona un nivel</option>
              <option value="grado">Grado</option>
              <option value="postgrado">Postgrado</option>
              <option value="maestria">Maestría</option>
            </select>
            {selectedLevel === "grado" && (
              <div className="selecciona">
                <h3 className="selecciona">Servicios de Grado:</h3>
                <select
                  className="titulo2"
                  id="service-select"
                  value={selectedService}
                  onChange={handleServiceChange}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="tesis">Tesis</option>
                  <option value="trabajo-practico">Trabajo Práctico</option>
                  <option value="monografia">Monografía</option>
                  <option value="ensayo">Ensayo</option>
                </select>
              </div>
            )}
            {selectedLevel === "postgrado" && (
              <div>
                <h3 className="selecciona">Servicios de Postgrado:</h3>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={handleServiceChange}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="servicio1">Servicio 1</option>
                  <option value="servicio2">Servicio 2</option>
                  <option value="servicio3">Servicio 3</option>
                </select>
              </div>
            )}
            {selectedLevel === "maestria" && (
              <div>
                <h3 className="selecciona">Servicios de Maestría:</h3>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={handleServiceChange}
                >
                  <option value="">Selecciona un servicio</option>

                  <option value="servicioA">Servicio A</option>
                  <option value="servicioB">Servicio B</option>
                  <option value="servicioC">Servicio C</option>
                </select>
              </div>
            )}

            <button id="close-btn" onClick={() => setShowPopUp(false)}>
              Cerrar
            </button>
          </div>
        )}
      </div>
      {selectedService && (
        <div className="service-informacion">
          <h2 className="tituloSelected">{selectedService}</h2>
          <p className="infoSelected">
            Información detallada sobre {selectedService}.
          </p>
          <button id="back-btn" onClick={handleBack}>
            Atrás
          </button>
        </div>
      )}
    </div>
  );
};
export default Crm4;
