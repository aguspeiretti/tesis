import Popup from "./PopUp2"; // Importa el componente Popup
import "./tabla.css";
import data from "../../data/users";
import { useState } from "react";

const TablaComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="tabla-container">
      <h1 className="tablaTitulo">Tabla de usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Ciudad</th>
            <th>País</th>
            <th>Servicio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario, index) => (
            <tr key={index} onClick={() => handleRowClick(usuario)}>
              <td>{usuario.nombre}</td>
              <td>{usuario.edad}</td>
              <td>{usuario.ciudad}</td>
              <td>{usuario.pais}</td>
              <td>{usuario.servicio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <Popup user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default TablaComponent;
