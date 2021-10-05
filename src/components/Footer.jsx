import React from "react";
import earth from "../images/земля.png";
import youTube from "../images/ютуб.svg";
import vk from "../images/вк.svg";
import insta from "../images/инст.svg";
const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__title">Наши соцсети</h2>
      <ul className="footer__social">
        <li className="footer__social-point">
          <a className="footer__link" href="/" id="YouTube">
            <img className="footer__link-img" alt="иллюстрация" src={youTube} />
            <p className="footer__link-text">YouTube</p>
          </a>
        </li>
        <li className="footer__social-point">
          <a className="footer__link" href="/">
            <img className="footer__link-img" alt="иллюстрация" src={vk} />
            <p className="footer__link-text">Вконтакте</p>
          </a>
        </li>
        <li className="footer__social-point">
          <a className="footer__link" href="/">
            <img className="footer__link-img" alt="иллюстрация" src={insta} />
            <p className="footer__link-text">Instagram</p>
          </a>
        </li>
      </ul>
      <p className="author">
        {" "}
        &#169; Юношеский клуб космонавтики им. Г.С. Титова (ЮКК)
      </p>
      <img className="illustration" src={earth} id="earth" alt="иллюстрация" />
    </div>
  );
};
export default Footer;
