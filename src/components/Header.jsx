import React from "react";
import Logo from "../images/headerLogo.png";
const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const text = document.querySelectorAll(".header__text")
    if (window.pageYOffset > 0) {
        header.style.background = ` rgba(18, 59, 158, ${window.pageYOffset / 500})`;background: ;
        text.forEach((text)=>{
          text.style.color = `white`
        })
    } else {
        header.style.background = "rgba(0, 0, 0, 0)";
    }
});
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt='лого'/>
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
