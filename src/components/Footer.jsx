import React from "react";
const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__title">Наши соцсети</h2>
      <ul className="footer__social">
        <li className="footer__social-point">
          <a className="footer__link">
            <img className="footer__link-img" />
            <p className="footer__link-text">YouTube</p>
          </a>
        </li>
        <li className="footer__social-point">
          <a className="footer__link">
            <img className="footer__link-img" />
            <p className="footer__link-text">Вконтакте</p>
          </a>
        </li>
        <li className="footer__social-point">
          <a className="footer__link">
            <img className="footer__link-img" />
            <p className="footer__link-text">Instagram</p>
          </a>
        </li>
      </ul>
      <img className="illustration" />
    </div>
  );
};
export default Footer;
