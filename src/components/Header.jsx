import React from "react";
import logoBlue from "../images/logo_siniy.svg";
import logoWhite from "../images/logo_bely.svg";
const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const text = document.querySelectorAll(".header__text");
    const logo = document.querySelector(".header__logo");
    const menuText1 = document.querySelector(".header__text-main");
    const menuText2 = document.querySelector(".header__text-club");
    const menuText3 = document.querySelector(".header__text-media");
    const menuText4 = document.querySelector(".header__text-cursec");

    if (window.pageYOffset > 0) {
      header.style.background = ` rgba(18, 59, 158, ${
        window.pageYOffset / 500
      })`;
      logo.src = logoWhite;
      text.forEach((text) => {
        text.style.color = `white`;
      });
    } else {
      logo.src = logoBlue;
      header.style.background = "rgba(0, 0, 0, 0)";
      menuText1.style.color = "#123b9e";
      menuText2.style.color = "#123b9e";
      if (window.screen.width <= 1400) {
        menuText3.style.color = "#123b9e";
        menuText4.style.color = "#123b9e";
        if (window.screen.width <= 1123) {
          menuText3.style.color = "white";
          menuText4.style.color = "white";
          if (window.screen.width <= 1066) {
            menuText3.style.color = "#123b9e";
            if (window.screen.width <= 887) {
              menuText3.style.color = "white";
            }
          }
        }
      }
    }
  });

  const scrollToMain = () => {
    window.scrollBy(0, 0);
  };
  return (
    <div className="header">
      <img className="header__logo" src={logoBlue} alt="лого" />
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__text header__text-main">Главная</li>

          <li className="header__text header__text-club">О клубе</li>
          <li className="header__text header__text-media">Медиа</li>
          <li className="header__text header__text-cursec">Курсы</li>
          <li className="header__text header__text-teachers">Педагоги</li>
          <li className="header__text header__text-contacts">Контакты</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
