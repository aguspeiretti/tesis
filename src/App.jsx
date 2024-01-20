import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Crm from "./pages/crm/Crm";
import Opciones from "./pages/opciones/Opciones";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Opciones />} />
      </Routes>
    </>
  );
}

export default App;
