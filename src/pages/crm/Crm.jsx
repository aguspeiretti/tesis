import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./crm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const servicesData = {
  Grado: ["Tesis de Grado", "Trabajo Practico", "Monografia", "Ensayo"],
  Posgrado: ["Servicio 1", "Servicio 2", "Servicio 3"],
  Maestria: ["Servicio A", "Servicio B", "Servicio C"],
};

const Crm = () => {
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
    <>
      {" "}
      <div className="crmContainer">
        <div className="navbar1">
          <div className="nav-header" onClick={handleServicesToggle}>
            <div className="contNav">
              <p>Servicios</p>
              <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
            </div>
          </div>
          {isServicesOpen && (
            <ul className="nav-list">
              <li>
                <div
                  className="nav-item"
                  onClick={() => handleLevelSelect("Grado")}
                >
                  Grado
                  <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
                </div>
                {selectedLevel === "Grado" && (
                  <ul className="sub-nav-list">
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
                  className="nav-item"
                  onClick={() => handleLevelSelect("Posgrado")}
                >
                  Posgrado
                  <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
                </div>
                {selectedLevel === "Posgrado" && (
                  <ul className="sub-nav-list">
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
                  className="nav-item"
                  onClick={() => handleLevelSelect("Maestria")}
                >
                  Maestria
                  <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
                </div>
                {selectedLevel === "Maestria" && (
                  <ul className="sub-nav-list">
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
          )}
        </div>

        <div className="content">
          {selectedService && (
            <div className="service-info">
              <h2>{selectedService}</h2>
              <p>Información detallada sobre {selectedService}.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Crm;
