import React, { useState } from "react";
import "./crm2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const servicesData = {
  Grado: ["Tesis de Grado", "Trabajo Practico", "Monografia", "Ensayo"],
  Posgrado: ["Servicio 1", "Servicio 2", "Servicio 3"],
  Maestria: ["Servicio A", "Servicio B", "Servicio C"],
};

const Crm2 = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleServicesToggle = () => {
    setServicesOpen(!isServicesOpen);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level === selectedLevel ? null : level);
    setSelectedService(null);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="App2">
      <div className="btnServicios" onClick={handleServicesToggle}>
        <p>Servicios</p>
      </div>
      <div className={`navbar ${isServicesOpen ? "open" : ""}`}>
        <ul className="nav-list2">
          <li>
            <div
              className="nav-item2"
              onClick={() => handleLevelSelect("Grado")}
            >
              Grado
            </div>
            {selectedLevel === "Grado" && (
              <ul className="sub-nav-list2">
                {servicesData["Grado"].map((service) => (
                  <li
                    className="subLista2"
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <div
              className="nav-item2"
              onClick={() => handleLevelSelect("Posgrado")}
            >
              Posgrado
            </div>
            {selectedLevel === "Posgrado" && (
              <ul className="sub-nav-list2">
                {servicesData["Posgrado"].map((service) => (
                  <li
                    className="subLista2"
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <div
              className="nav-item2"
              onClick={() => handleLevelSelect("Maestria")}
            >
              Maestria
            </div>
            {selectedLevel === "Maestria" && (
              <ul className="sub-nav-list2">
                {servicesData["Maestria"].map((service) => (
                  <li
                    className="subLista2"
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="content2">
        {selectedService && (
          <div className="service-info2">
            <h2>{selectedService}</h2>
            <p>Información detallada sobre {selectedService}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crm2;
