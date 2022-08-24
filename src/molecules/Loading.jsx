import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import "./loading.css";

const Loading = () => {
  return (
    <div className="container__loading">
      <div className="container__loading-items">
        <span className="loading__title one">Perfecto Descontento</span>
        <span className="loading__title two">Perfecto Descontento</span>
        <BounceLoader size={300} color="#da397c" className="loading__ring" />
        <span className="loading__subtitle one">Arte y diseño</span>
        <span className="loading__subtitle two">Arte y diseño</span>
        <br />
      </div>
    </div>
  );
};

export default Loading;
