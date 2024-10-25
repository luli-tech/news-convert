import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Locate() {
  let load = useLoaderData();

  return (
    <div className="news-content-container">
      <div className="content-image-container">
        <img src={load.image} />
      </div>
      <div className="title-container">
        <h3>{load.title}</h3>
      </div>
      <div className="description-container">
        <p>"{load.description}"</p>
      </div>
      <div className="author-container">
        <p>Author:{load.author}</p>
      </div>
      <p className="date">{load.published}</p>
      <div className="icons">
        <FontAwesomeIcon className="font" icon={faFacebook} />
        <FontAwesomeIcon className="font" icon={faTelegram} />
        <FontAwesomeIcon className="font" icon={faTwitter} />
        <FontAwesomeIcon className="font" icon={faWhatsapp} />
      </div>
      <div className="main-content">
        <p>{load.content}</p>
      </div>
      <a className="read-more" href="">
        Read-More
      </a>
    </div>
  );
}

export default Locate;
