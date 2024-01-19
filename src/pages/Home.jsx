import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import FooterFlotante from "../Components/footerFlotante/FooterFlotante";
import tesis from "../assets/tesis.webp";
import { useState } from "react";
import PopUp from "../Components/PopUp/PopUp";
const Home = () => {
  const [catSelectedFromHeader, setCatSelectedFromHeader] = useState("");
  console.log(catSelectedFromHeader);
  const handleCatSelectedChange = (cat) => {
    setCatSelectedFromHeader(cat);
  };

  const handlePopUpClose = () => {
    setCatSelectedFromHeader("");
  };

  return (
    <>
      {catSelectedFromHeader ? (
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
      </div>
    </>
  );
};

export default Home;
