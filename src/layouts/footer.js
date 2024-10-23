import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="foot">
        <h1>Find and follow Us</h1>
        <div className="icons icon-container">
          <a href="">
            <FontAwesomeIcon className="font footer" icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon className="font footer" icon={faTelegram} />
          </a>
          <a href="">
            <FontAwesomeIcon className="font footer" icon={faTwitter} />
          </a>
          <a href="">
            {" "}
            <FontAwesomeIcon className="font footer" icon={faWhatsapp} />
          </a>
        </div>
        <div className="contact-details">
          <p>TEL:0912982592</p>
          <p>Fax:0910165953</p>
          <a href="mailto:olabodemicheal5@gmail.com">Send your email here</a>
        </div>
        <div>
          <p style={{ color: "white" }}>FOOTER REMADE WITH REACT</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
