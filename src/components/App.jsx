import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

import cloud1 from '../images/облако1.png'
import cloud2 from '../images/облако2.png'
import cloud3 from '../images/облако3.png'
import cloud4 from '../images/облако4.png'
import cloud5 from '../images/облако5.png'
import cloud6 from '../images/облако6.png'
import rocket from '../images/ракета.png'
import buble from '../images/шар.png'
import earth from '../images/земля.png'
function App() {
  return (
    <div className="page">
  

        {/* <img className="illustration" src={cloud1} id='cloud1' alt='иллюстрация'/>
        <img className="illustration" src={cloud2} id='cloud2' alt='иллюстрация'/>
        <img className="illustration" src={cloud3} id='cloud3' alt='иллюстрация'/>
        <img className="illustration" src={cloud4} id='cloud4' alt='иллюстрация'/>
        <img className="illustration" src={cloud5} id='cloud5' alt='иллюстрация'/>
        <img className="illustration" src={cloud6} id='cloud6' alt='иллюстрация'/>
        <img className="illustration" src={rocket} id='rocket'alt='иллюстрация'/>
        <img className="illustration" src={buble}id='buble' alt='иллюстрация'/>
        <img className="illustration" src={earth}id='earth' alt='иллюстрация'/> */}
      <Header />
      <Main />
      {/* <Footer /> */}
      </div>
  
  );
}

export default App;
