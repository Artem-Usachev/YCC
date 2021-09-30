import React from "react";
import spaceBackground from "../images/headerBackground.png";
import spaceBublle1 from "../images/headerSpace.png";
import children from "../images/children.png";
import club1 from "../images/club1.jpg";
import club2 from "../images/club2.jpg";
import club3 from "../images/club3.jpg";
import club4 from "../images/club4.jpg";
import Card from "./Card";
const Main = () => {
  return (
    <>
      <section className="main">
        <img className="illustration" src={spaceBackground} />
        <img className="illustration" src={spaceBublle1} />
        <img className="illustration" src={children} />
        <h1 className="main__title">Юношеский Клуб Космонавтики</h1>
        <button className="main__button">Записаться</button>
      </section>
      <section className="club">
        <h2 className="club__title">О Клубе</h2>
        <div className="club__content">
          <div className="club__text-box">
            <p className="club__text">
              В клуб принимаются учащиеся 7-10 классов (обучение на бюджетной
              основе). Комплексная образовательная программа клуба рассчитана на
              3 года. По окончании учащиеся получают «Свидетельство о
              дополнительном образовании».
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
              «Космос». Заявки на игру принимаются по тел.: 407 43 55. Участие
              бесплатное
            </p>
          </div>
          <div className="club__media-box">
            <img className="club__illustration" src={club1} />
            <img className="club__illustration" src={club2} />
            <img className="club__illustration" src={club3} />
            <img className="club__illustration" src={club4} />
            <video className="club__video" />
            <video className="club__video" />
            <video className="club__video" />
            <video className="club__video" />
          </div>
          <div className="nav">
            <img className="nav__point" />
            <img className="nav__point" />
            <img className="nav__point" />
            <img className="nav__point" />
            <img className="nav__point" />
            <img className="nav__point" />
            <img className="nav__point" />
            <img className="nav__point" />
          </div>
        </div>
      </section>
      <section className="history">
        <h2 className="history__title">Наша история и гордость</h2>
        <p className="history__subtitle">
          Юношеский клуб космонавтики основан в 1961 году. Является старейшим в
          России подростковым клубом научно-технической аэрокосмической
          направленности. За годы существования клуба его окончили более 3000
          выпускников, среди которых: Е.А. Иванова – космонавт-исследователь,
          А.И. Борисенко – Герой России, летчик-космонавт, А.Г. Храмов – Герой
          России, капитан 1 ранга, акванавт
        </p>
        <Card />
        <img className="illustration" />
        <img className="illustration" />
        <img className="illustration" />
        <div className="history__media-box">
          <video className="history__video" />
          <video className="history__video" />
          <video className="history__video" />
        </div>
        <div className="nav">
          <img className="nav__point" />
          <img className="nav__point" />
          <img className="nav__point" />
        </div>
        <img className="history__arrow history__arrow_left" />
        <img className="history__arrow history__arrow_right" />
      </section>
      <section className="teachers">
        <h2 className="teachers__title">Педагоги</h2>
        <div className="teachers__card-box">
          <div className="teachers__main-card-box">
            <Card />
          </div>
          <Card />
        </div>
        <img className="illustration" />
        <img className="illustration" />
        <img className="illustration" />
        <img className="illustration" />
      </section>
      <section className="courses">
        <h2 className="courses__title">Курсы</h2>
        <ul className="courses__text-box">
          <li className="courses__point">
            <h3 className="courses__semi-title">Аэрокосмические технологии:</h3>
            <ul className="courses__ul-box">
              <li className="courses__text">
                общая и наблюдательная астрономия, астрофизика
              </li>
              <li className="courses__text">
                история развития космонавтики, основы ракетно-космической
                техники
              </li>
              <li className="courses__text">
                основы спутниковой навигации, дистанционное зондирование Земли
              </li>
              <li className="courses__text">аэродинамика и самолетовождение</li>
              <li className="courses__text">
                учебно-летная подготовка – практические занятия на авиационных
                тренажерах
              </li>
            </ul>
          </li>
          <li className="courses__point">
            <h3 className="courses__semi-title">Компьютерные технологии:</h3>
            <ul className="courses__ul-box">
              <li className="courses__text">офисные технологии</li>
              <li className="courses__text">аудиовизуальные технологии</li>
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
              <li className="courses__text">
                Конструкторское бюро «АнСат» информационное сопровождение
                научно-исследовательской деятельности
              </li>
              <li className="courses__text">
                участие в конференциях и конкурсах различного уровня
              </li>
              <li className="courses__text">
                сотрудничество с ВУЗами и предприятиями
              </li>
              <li className="courses__text">реализация совместных проектов</li>
            </ul>
          </li>
          <li className="courses__point">
            <h3 className="courses__semi-title">
              Оздоровительно-спортивные мероприятия:
            </h3>
            <ul className="courses__ul-box">
              <li className="courses__text">
                обучение плаванию в бассейне, занятия в тренажерном зале
              </li>
              <li className="courses__text">
                соревнования по волейболу, настольному теннису, шахматам и
                шашкам
              </li>
              <li className="courses__text">Летние и осенние лагерные сборы</li>
            </ul>
          </li>
        </ul>
        <div className="courses__media-box">
          <video className="courses__video" />
          <video className="courses__video" />
          <video className="courses__video" />
        </div>
        <div className="nav">
          <img className="nav__point" />
          <img className="nav__point" />
          <img className="nav__point" />
        </div>
      </section>
      <section className="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <ul className="contacts__text-box">
          <li className="contacts__point">
            <h3 className="contacts__semi-title">
              Жуковский Валерий Филиппович
            </h3>
            <p className="contacts__text">
              заведующий сектором, научный руководитель клуба тел/факс
              310-70-71, с 11.00 до 20.00, кроме СР и СБ
            </p>
          </li>
          <li className="contacts__point">
            <h3 className="contacts__semi-title">Ронкина Анна Юрьевна</h3>
            <p className="contacts__text">
              руководитель клуба тел. 407-43-55, с 11.00 до 17.30, кроме ВТ и СБ
            </p>
          </li>
          <li className="contacts__point">
            <h3 className="contacts__semi-title">Жуковская Ирина Яковлевна</h3>
            <p className="contacts__text">
              зав.лабораторией ИТ, руководитель лагерных сборов тел. 407-43-55,
              с 11.00 до 20.00, кроме ПТ и СБ
            </p>
          </li>
          <li className="contacts__point">
            <h3 className="contacts__semi-title">e-mail:</h3>
            <p className="contacts__text">ycc.spb@yandex.ru</p>
          </li>
          <li className="contacts__point">
            <h3 className="contacts__semi-title">График работы Клуба</h3>
            <p className="contacts__text">
              С понедельника по пятницу с 11.00 до 20.00, в воскресенье с 11.00
              до 15.00.
            </p>
          </li>
        </ul>
        <img className="illustration" />
      </section>
    </>
  );
};
export default Main;
