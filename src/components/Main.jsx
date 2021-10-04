import React, { useState, useEffect } from "react";
import spaceBublle1 from "../images/headerSpace.png";
import children from "../images/children.png";
import club1 from "../images/club1.jpg";
import club2 from "../images/club2.jpg";
import club3 from "../images/club3.jpg";
import club4 from "../images/club4.jpg";
import Card from "./Card";
import arrorRight from "../images/arrowR.svg";
import arrorLeft from "../images/arrowL.svg";
import ellipse from "../images/Ellipse.svg";
import Slider from "./Slider";
import cloud1 from "../images/облако1.png";
import cloud2 from "../images/облако2.png";
import cloud3 from "../images/облако3.png";
import cloud4 from "../images/облако4.png";
import cloud5 from "../images/облако5.png";
import cloud6 from "../images/облако6.png";
import buble from "../images/шар.png";
import EditProfilePopup from "./PopupWithForm";
import rocket from "../images/ракета.png";
import { heroes, teachers, mainTeachers } from "../utils/teacher";
const Main = () => {
  const img = [
    <img className="club__illustration" key={club1} src={club1} />,
    <img className="club__illustration" key={club2} src={club2} />,
    <img className="club__illustration" key={club3} src={club3} />,
    <img className="club__illustration" key={club4} src={club4} />,
  ];
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const closeAllPopup = () => {
    setIsEditProfilePopupOpen(false);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  return (
    <>
      <section className="main">
        <div className="main__background">
          <div className="main__background-shell">
            <div className="main__stars_first"></div>
            <div className="main__stars_second"></div>
            <div className="main__stars_third"></div>
            {/* <div className="main__comet">
              <div className="main__comet-shell">
                <div className="main__glowing-ball"></div>
              </div>
            </div> */}
          </div>
        </div>
        <img
          className="illustration"
          src={spaceBublle1}
          id="spaceBublle1"
          alt="иллюстрация"
        />
        <img
          className="illustration"
          src={children}
          id="children"
          alt="иллюстрация"
        />
        <h1 className="main__title">Юношеский Клуб Космонавтики</h1>
        <button className="main__button" onClick={handleEditProfileClick}>
          <p className="main__button-text"> Записаться</p>
        </button>
      </section>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      />
      <section className="club">
        <h2 className="club__title">О Клубе</h2>
        <div className="club__content">
          <div className="club__text-box">
            <p className="club__text">
              В клуб принимаются учащиеся{" "}
              <span className="club__span">
                7-10 классов (обучение на бюджетной основе).
              </span>{" "}
              Комплексная образовательная программа клуба рассчитана на 3 года.
              <br />
              По окончании учащиеся получают «Свидетельство о дополнительном
              образовании».
            </p>
            <p className="club__text">
              На базе клуба ежегодно проводится Открытая Санкт-Петербургская
              научно-практическая конференция учащихся «Человек и космос»,
              Открытая научно-практическая конференция учащихся, студентов и
              аспирантов «Информационные технологии в области науки и техники»,
              осуществляются курсовые и дипломные проекты студентов технических
              ВУЗов города, организуется работа секций Всероссийской юношеской
              научно-практической конференции «Будущее России — в высоких
              технологиях».
            </p>
            <p className="club__text">
              Для школьных команд 6-7 классов Юношеский Клуб космонавтики в
              апреле проводит ежегодную познавательную игру по станциям
              «Космос».{" "}
              <span className="club__span">
                Заявки на игру принимаются по тел.: 407 43 55. Участие
                бесплатное
              </span>
            </p>
          </div>
          <div className=" club__media-nav-box">
            <Slider mediaArray={img} />
            {/* <video className="club__video" />
            <video className="club__video" />
            <video className="club__video" />
            <video className="club__video" /> */}

            <div className="nav">
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
            </div>
          </div>
        </div>
      </section>
      <section className="history">
        {/* <img className="illustration" src={cloud2} id='cloud2' alt='иллюстрация'/>
      <img className="illustration" src={cloud1} id='cloud1' alt='иллюстрация'/>
      <img className="illustration" src={rocket} id='rocket'alt='иллюстрация'/> */}
        <h2 className="history__title">Наша история и гордость</h2>
        <p className="history__subtitle">
          Юношеский клуб космонавтики основан в 1961 году. Является старейшим в
          России подростковым клубом научно-технической аэрокосмической
          направленности. За годы существования клуба его окончили более 3000
          выпускников, среди которых: Е.А. Иванова – космонавт-исследователь,
          А.И. Борисенко – Герой России, летчик-космонавт, А.Г. Храмов – Герой
          России, капитан 1 ранга, акванавт
        </p>
        <div className="cards history__cards">
          {heroes.map((card) => {
            return <Card data={card} />;
          })}
        </div>

        <Slider mediaArray={img} />
        {/* <div className="history__media-box">
          <video className="history__video" />
          <video className="history__video" />
          <video className="history__video" />
        </div> */}
        <div className="nav">
          <img className="nav__point" alt="иллюстрация" src={ellipse} />
          <img className="nav__point" alt="иллюстрация" src={ellipse} />
          <img className="nav__point" alt="иллюстрация" src={ellipse} />
        </div>
        <img
          className="history__arrow history__arrow_left"
          alt="иллюстрация"
          src={arrorRight}
        />
        <img
          className="history__arrow history__arrow_right"
          alt="иллюстрация"
          src={arrorLeft}
        />
      </section>

      <section className="teachers">
        {/* <img className="illustration" src={cloud3} id='cloud3' alt='иллюстрация'/>
      <img className="illustration" src={cloud4} id='cloud4' alt='иллюстрация'/>
      <img className="illustration" src={buble}id='buble' alt='иллюстрация'/> */}
        <h2 className="teachers__title">Педагоги</h2>
        <div className="teachers__card-box">
          <div className="teachers__main-card-box">
            <div className="cards teachers__cards-main-teachers">
              {mainTeachers.map((card) => {
                return (
                  <Card
                    data={card}
                    className="teachers__card-main-teachers-title"
                  />
                );
              })}
            </div>
            <div className="cards">
              {teachers.map((card) => {
                return <Card data={card} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="courses">
        {/* <img className="illustration" src={cloud5} id='cloud5' alt='иллюстрация'/>
        <img className="illustration" src={cloud6} id='cloud6' alt='иллюстрация'/> */}
        <h2 className="courses__title">Курсы</h2>
        <div className="courses__content-box">
          <ul className="courses__text-box">
            <li className="courses__point">
              <h3 className="courses__semi-title" id="semi-title-first">
                Аэрокосмические технологии:
              </h3>
              <ul className="courses__ul-box">
                <li className="courses__text">
                  Общая и наблюдательная астрономия, астрофизика
                </li>
                <li className="courses__text">
                  История развития космонавтики, основы ракетно-космической
                  техники
                </li>
                <li className="courses__text">
                  Основы спутниковой навигации, дистанционное зондирование Земли
                </li>
                <li className="courses__text">
                  аэродинамика и самолетовождение
                </li>
                <li className="courses__text">
                  Учебно-летная подготовка – практические занятия на авиационных
                  тренажерах
                </li>
              </ul>
            </li>
            <li className="courses__point">
              <h3 className="courses__semi-title">Компьютерные технологии:</h3>
              <ul className="courses__ul-box">
                <li className="courses__text">Офисные технологии</li>
                <li className="courses__text">Аудиовизуальные технологии</li>
                <li className="courses__text">
                  3D-моделирование и основы прототипирования
                </li>
              </ul>
            </li>
            <li className="courses__point">
              <h3 className="courses__semi-title">
                Научно-исследовательская деятельность:
              </h3>
              <ul className="courses__ul-box">
                <li className="courses__text">Конструкторское бюро «АнСат»</li>
                <li className="courses__text">
                  Информационное сопровождение научно-исследовательской
                  деятельности
                </li>
                <li className="courses__text">
                  Участие в конференциях и конкурсах различного уровня
                </li>
                <li className="courses__text">
                  Сотрудничество с ВУЗами и предприятиями
                </li>
                <li className="courses__text">
                  Реализация совместных проектов
                </li>
              </ul>
            </li>
            <li className="courses__point">
              <h3 className="courses__semi-title">
                Оздоровительно-спортивные мероприятия:
              </h3>
              <ul className="courses__ul-box">
                <li className="courses__text">
                  Обучение плаванию в бассейне, занятия в тренажерном зале
                </li>
                <li className="courses__text">
                  Соревнования по волейболу, настольному теннису, шахматам и
                  шашкам
                </li>
                <li className="courses__text">
                  Летние и осенние лагерные сборы
                </li>
              </ul>
            </li>
          </ul>
          <div className="club__media-nav-box">
            <Slider mediaArray={img} />
            {/* <div className="courses__media-box">
          <video className="courses__video" />
          <video className="courses__video" />
          <video className="courses__video" />
        </div> */}

            <div className="nav">
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
              <img className="nav__point" alt="иллюстрация" src={ellipse} />
            </div>
          </div>
        </div>
      </section>

      <section className="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__content-box">
          <ul className="contacts__text-box">
            <li className="contacts__point">
              <h3 className="contacts__semi-title" id="contacts__semi-title">
                Жуковский Валерий Филиппович
              </h3>
              <p className="contacts__text">
                заведующий сектором, научный руководитель клуба
                <br /> тел/факс 310-70-71,
                <br /> с 11.00 до 20.00, кроме СР и СБ
              </p>
            </li>
            <li className="contacts__point">
              <h3 className="contacts__semi-title">Ронкина Анна Юрьевна</h3>
              <p className="contacts__text">
                руководитель клуба <br />
                тел. 407-43-55,
                <br /> с 11.00 до 17.30, кроме ВТ и СБ
              </p>
            </li>
            <li className="contacts__point">
              <h3 className="contacts__semi-title">
                Жуковская Ирина Яковлевна
              </h3>
              <p className="contacts__text">
                зав.лабораторией ИТ, руководитель лагерных сборов
                <br /> тел. 407-43-55,
                <br />с 11.00 до 20.00, кроме ПТ и СБ
              </p>
            </li>
            <li className="contacts__point">
              <h3 className="contacts__semi-title">e-mail:</h3>
              <p className="contacts__text">ycc.spb@yandex.ru</p>
            </li>
            <li className="contacts__point">
              <h3 className="contacts__semi-title">График работы Клуба</h3>
              <p className="contacts__text">
                С понедельника по пятницу с 11.00 до 20.00, в воскресенье с
                11.00 до 15.00.
              </p>
            </li>
            <li className="contacts__point">
              <h3 className="contacts__semi-title">Адрес</h3>
              <p className="contacts__text">
                Санкт-Петербург, Невский проспект 39
              </p>
            </li>
          </ul>
          <div className="club__media-box">
            <div className="footer__map-box">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A223739f2c67fbab0d79f9efbffd08694553474160efa9000dfa10f658d7db0be&amp;source=constructor"
                width="764"
                height="538"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Main;
