import React from "react";
import "./popUp2.css";

const Popup = ({ user, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h4 className="usuario">
          Usuario: <strong className="nombre">{user.nombre}</strong>{" "}
        </h4>
        <h2 className="serv">
          Servicio de interes:{" "}
          <strong className="servicio"> {user.servicio}</strong>{" "}
        </h2>
        <div className="preguntasContainer">
          <h2 className="ayuda">
            Preguntas que pueden ayudarte al momento de vender el servicio:
          </h2>
          <ul>
            <li className="slot">
              <strong className="title">Información Personal:</strong>
              <ul className="preguntas">
                <li>Nombre:</li>
                <li>Edad:</li>
                <li>Profesión/Área de Estudio:</li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Motivación:</strong>
              <ul className="preguntas">
                <li>
                  ¿Qué te motiva a considerar la realización de una tesis en
                  este momento?
                </li>
                <li>¿Cuál es tu objetivo principal al realizar una tesis?</li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Temática y Área de Interés:</strong>
              <ul className="preguntas">
                <li>¿Tienes una temática específica en mente para tu tesis?</li>
                <li>¿En qué área o disciplina te gustaría enfocarte?</li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">
                Objetivos Académicos y Profesionales:
              </strong>
              <ul className="preguntas">
                <li>
                  ¿Cuáles son tus objetivos académicos y profesionales a largo
                  plazo?
                </li>
                <li>¿Cómo crees que la tesis contribuirá a tus metas?</li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Tiempo y Plazos:</strong>
              <ul className="preguntas">
                <li>¿Cuál es tu línea de tiempo para completar la tesis?</li>
                <li>¿Tienes algún plazo específico que necesites cumplir?</li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Nivel de Involucramiento:</strong>
              <ul className="preguntas">
                <li>
                  ¿Qué nivel de involucramiento esperas tener en la elaboración
                  de la tesis?
                </li>
                <li>
                  ¿Prefieres un servicio integral o una colaboración más activa?
                </li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Recursos Disponibles:</strong>
              <ul className="preguntas">
                <li>
                  ¿Cuentas con algún recurso específico (bibliotecas, datos,
                  etc.) que quieras utilizar en la tesis?
                </li>
                <li>
                  ¿Tienes algún presupuesto estimado para la realización de la
                  tesis?
                </li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Expectativas del Servicio:</strong>
              <ul className="preguntas">
                <li>¿Qué esperas de un servicio de realización de tesis?</li>
                <li>
                  ¿Hay algún requisito especial que te gustaría que el servicio
                  cumpla?
                </li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Experiencia Pasada:</strong>
              <ul className="preguntas">
                <li>
                  ¿Has tenido experiencias anteriores en la elaboración de
                  proyectos académicos similares?
                </li>
                <li>
                  ¿Hay algo que te haya gustado o que te gustaría evitar
                  basándote en experiencias previas?
                </li>
              </ul>
            </li>

            <li className="slot">
              <strong className="title">Comunicación y Seguimiento:</strong>
              <ul className="preguntas">
                <li>
                  ¿Cómo prefieres que nos comuniquemos durante el proceso?
                </li>
                <li>
                  ¿Qué tipo de seguimiento o actualizaciones esperas recibir?
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
