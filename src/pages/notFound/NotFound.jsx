import React from "react";
import notfound from "../../assets/svg/undraw_page_not_found_re_e9o6__PINK.svg";

import "./notFound.css";

const notFound = () => {
  return (
    <div className="container__not-found">
      <img src={notfound} alt="not-found" />
    </div>
  );
};

export default notFound;
