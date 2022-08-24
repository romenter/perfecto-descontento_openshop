import React from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import Slider from "../../molecules/Slider";

import "./mainHeader.css";
// const images = require.context('../../assets/images/slide/', true);

const MainHeader = () => {
  // const [index, setIndex] = useState()
  // const {title, path, src} = slider[index]

  // const prev = () => {
  //   setIndex(a => a -1);
  //   if(index <= 0){
  //       setIndex(slider.length -1)
  //   }
  // }
  // const next = () => {
  //     setIndex(a => a +1);
  //     if(index >= slider.length -1){
  //         setIndex(0)
  //     }
  // }

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>
            #ElArte #LaVida
            <FaPaintBrush />
          </h4>
          <h1>Perfecto Descontento</h1>
          <p>
            Nos juntamos todos los del 5o grado, para platicar que hicimos en
            vacaciones. Pronto se formó una rueda con Pronto se formó una rueda
            con Pronto se formó
          </p>
          <Link to="/products" className="main__header-left btn lg">
            Ver mas
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <Slider />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
