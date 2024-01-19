import { NavLink } from "react-router-dom";
import logo from "../../assets/Recurso-3.png";
import "./login.css";
import TablaComponent from "../../Components/Tabla/TablaComponent";

const Login = () => {
  return (
    <div className="adminContainer">
      <div className="headerContainer">
        <NavLink className={"logoLink"} to={"/"}>
          <div className="imgContainer">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>
        <div>
          <h1>Panel administrador</h1>
        </div>

        {/* <div className="buttonContainer">Presupuesto</div> */}
        <NavLink to={"/Login"}>
          <div className="buttonContainer2">Logout</div>
        </NavLink>
      </div>
      <div className="tableContainer">
        <TablaComponent />
      </div>
    </div>
  );
};

export default Login;
