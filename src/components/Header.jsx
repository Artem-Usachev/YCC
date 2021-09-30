import React from "react";
import Logo from "../images/headerLogo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} />
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__text">Главная</li>
          <li className="header__text">О клубе</li>
          <li className="header__text">Медиа</li>
          <li className="header__text">Курсы</li>
          <li className="header__text">Педагоги</li>
          <li className="header__text">Контакты</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
