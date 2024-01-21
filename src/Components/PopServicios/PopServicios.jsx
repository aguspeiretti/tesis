import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popServicios.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const servicesData = {
  Grado: ["Tesis de Grado", "Trabajo Practico", "Monografia", "Ensayo"],
  Posgrado: ["Servicio 1", "Servicio 2", "Servicio 3"],
  Maestria: ["Servicio A", "Servicio B", "Servicio C"],
};

const PopServicios = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level === selectedLevel ? null : level);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="serviciosCont">
      <div className="navServiciosPop">
        <ul className="nav-list3">
          <li>
            <div
              className="nav-item3"
              onClick={() => handleLevelSelect("Grado")}
            >
              Grado
              <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
            </div>
            {selectedLevel === "Grado" && (
              <ul className="sub-nav-list3">
                {servicesData["Grado"].map((service) => (
                  <li
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
              className="nav-item3"
              onClick={() => handleLevelSelect("Posgrado")}
            >
              Posgrado
              <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
            </div>
            {selectedLevel === "Posgrado" && (
              <ul className="sub-nav-list3">
                {servicesData["Posgrado"].map((service) => (
                  <li
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
              className="nav-item3"
              onClick={() => handleLevelSelect("Maestria")}
            >
              Maestria
              <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
            </div>
            {selectedLevel === "Maestria" && (
              <ul className="sub-nav-list3">
                {servicesData["Maestria"].map((service) => (
                  <li
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
      <div className="contenidoServiciosPop">
        {selectedService && (
          <div className="service-info3">
            <h2>{selectedService}</h2>
            <p>Información detallada sobre {selectedService}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopServicios;
