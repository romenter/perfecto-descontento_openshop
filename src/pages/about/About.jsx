import React from "react";
import Header from "../../components/header/Header";

import portada from "../../assets/images/guy/nat-smooking-slide.jpeg";
import heartDraw from "../../assets/svg/undraw_super_thank_you_re_f8bo__PINK.svg";
import focusDraw from "../../assets/svg/undraw_image_focus_re_qqxc__PINK.svg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="¿Quien soy?" image={portada}>
        os juntamos todos los del 5o gradoos juntamos todos los del 5o gradoos
        juntamos todos los del 5o grado, para platicar que hicimos en
        vacaciones. Pronto se formó una rueda con Pronto se formó una rueda con
        Pronto se formó
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={focusDraw} alt="nat caballo" />
          </div>
          <div className="about__section-content">
            <h1>Todo comenzo...</h1>
            <p>
              os juntamos todos los del 5o grado, para platicar que hicimos en
              vacaciones. Pronto se formó una rueda con Pronto se formó una
              rueda con Pronto se formó os juntamos todos los del 5o grado, para
              platicar que hicimos en vacaciones. Pronto se formó una rueda con
              Pronto se formó una rueda con Pronto se formó os juntamos todos
              los del 5o grado, para platicar que hicimos en vacaciones. Pronto
              se formó una rueda con Pronto se formó una rueda con Pronto se fo
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-mision">
          <div className="about__section-image">
            <img src={heartDraw} alt="heart draw" />
          </div>
          <div className="about__vision-mision content">
            <div className="about__section-content one">
              <h1>Vision</h1>
              <p>
                os juntamos todos los del 5o grado, para platicar que hicimos en
                vacaciones. Pronto se formó una rueda con Pronto se formó una
                rueda con Pronto se formó os juntamos todos los del 5o grado,
                para platicar que hicimos en vacaciones. Pronto se formó una
                rueda con Pronto se formó una rueda con Pronto se formó os
                juntamos todos
              </p>
            </div>
            <div className="about__section-content two">
              <h1>Mision</h1>
              <p>
                os juntamos todos los del 5o grado, para platicar que hicimos en
                vacaciones. Pronto se formó una rueda con Pronto se formó una
                rueda con Pronto se formó os juntamos todos los del 5o grado,
                para platicar que hicimos en vacaciones. Pronto se formó una
                rueda con Pronto se formó una rueda con Pronto se formó os
                juntamos todos
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
