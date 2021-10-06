import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import shell from "../images/kometa_svechenie.png";

function App() {
  
  return (
    <div className="page">
      <div className="plug">
        <div className="plug__box">
          <div className="plug__illustration">
            <div className="plug__border">
              <img className="plug__comet-shell" src={shell} alt="свечение" />
            </div>
          </div>
          <div className="plug__stars1"></div>
          <div className="plug__stars1"></div>
          <div className="plug__stars2"></div>
          <h1 className="piug__title">
            Пожалуйста, переверните устройство в вертикальное положение.
            Спасибо!
          </h1>
        </div>
      </div>

      <Header />
      <Main id="1" />
      <Footer />
    </div>
  );
}

export default App;
