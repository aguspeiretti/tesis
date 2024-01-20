import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import FooterFlotante from "../Components/footerFlotante/FooterFlotante";
import tesis from "../assets/tesis.webp";
import { useState } from "react";
import PopUp from "../Components/PopUp/PopUp";
import logo from "../assets/Recurso-3.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  // const [catSelectedFromHeader, setCatSelectedFromHeader] = useState("");
  // console.log(catSelectedFromHeader);
  // const handleCatSelectedChange = (cat) => {
  //   setCatSelectedFromHeader(cat);
  // };

  // const handlePopUpClose = () => {
  //   setCatSelectedFromHeader("");
  // };

  return (
    <>
      {/* {catSelectedFromHeader ? (
        <PopUp cat={catSelectedFromHeader} onClose={handlePopUpClose} />
      ) : null}
      <Header onCatSelectedChange={handleCatSelectedChange} />
      <Banner />
      <FooterFlotante />
      <div className="principalContainer">
        <div className="imgPrincipal">
          <img src={tesis} alt="imgtesis" />
        </div>
        <div className="interaccion">
          <div className="interaccionContainer">
            <h3>¿sin tiempo?</h3>
            <h1>Hacemos tu Tesis</h1>
            <div className="boton">conoce que ofrecemos</div>
          </div>
        </div>
      </div> */}
      <div className="headerContainer">
        <NavLink className={"logoLink"} to={"/"}>
          <div className="imgContainer">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>
        <NavLink>
          <div>Opcion 1</div>
        </NavLink>
        <NavLink>
          <div>Opcion 2</div>
        </NavLink>

        {/* <div className="buttonContainer">Presupuesto</div> */}
        <NavLink to={"/Login"}>
          <div className="buttonContainer2">Logout</div>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
