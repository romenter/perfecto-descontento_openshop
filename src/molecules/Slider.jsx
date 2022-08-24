/** Indesicion si poner una imagen con posibilidad de slide
 * (y automatizada) o fija */

// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
// import { slider } from "../data";
import React, { Link } from "react-router-dom";
import natu from "../assets/images/guy/nat-pinting.jpeg";

// const images = require.context("../assets/images/slide", true);

const Slider = ({ image, title }) => {
  //   const [index, setIndex] = useState();
  //   const { title, path, src } = slider[index];

  //   const prev = () => {
  //     setIndex((a) => a - 1);
  //     if (index <= 0) {
  //       setIndex(slider.length - 1);
  //     }
  //   };
  //   const next = () => {
  //     setIndex((a) => a + 1);
  //     if (index >= slider.length - 1) {
  //       setIndex(0);
  //     }
  //   };

  return (
    <div>
      {/* <button onClick={prev} className="main__header-arrow left">
        <BiLeftArrow />
      </button> */}

      <div className="slider__container">
        <div className="slider img">
          <img className="main__header img" src={natu} />
        </div>
        <Link to="/about">
          <div className="slider__title-container">
            <h2>Queres saber algo de mi? . . . </h2>
          </div>
        </Link>
      </div>

      {/* <button onClick={next} className="main__header-arrow rigth">
        <BiRightArrow />
      </button> */}
    </div>
  );
};

export default Slider;