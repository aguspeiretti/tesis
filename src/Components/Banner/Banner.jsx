import wha from "../../assets/whatsapp-logo-1.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="bannerContainer">
      <p>Contáctanos</p>
      <div className="whaContainer">
        <img src={wha} alt="" />
      </div>
      <p> +54 9 3516 20 8174</p>
    </div>
  );
};

export default Banner;
