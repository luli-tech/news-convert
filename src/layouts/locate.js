import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
function Locate() {
  let { id } = useParams();
  let useData = useSelector((state) => state.news.articles);
  let finale = useData.find((data) => data.id === id);
  return (
    <div className="news-content-container outlet">
      <div className="content-image-container">
        <img src={finale.image} />
      </div>
      <div className="title-container">
        <h3>{finale.title}</h3>
      </div>
      <div className="description-container">
        <p>{finale.description}</p>
      </div>
      <div className="author-container">
        <p>Author:{finale.author}</p>
      </div>
      <p className="date"></p>
      <div className="icons">
        <FontAwesomeIcon className="font" icon={faFacebook} />
        <FontAwesomeIcon className="font" icon={faTelegram} />
        <FontAwesomeIcon className="font" icon={faTwitter} />
        <FontAwesomeIcon className="font" icon={faWhatsapp} />
      </div>
      <div className="main-content">
        <p>{finale.content}</p>
      </div>
      <a className="read-more" href={finale.url}>
        Read-More
      </a>
    </div>
  );
}

export default Locate;
