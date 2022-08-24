import React from "react";
import portada from '../../assets/images/guy/nat-magic.jpeg'
import Header from "../../components/header/Header";
import horse from '../../assets/images/guy/nat-horse.jpeg'
import focusPainting from '../../assets/images/guy/nat-pinting.jpeg'

import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <Header title="Intereses personales" image={portada}>
        os juntamos todos los del 5o gradoos juntamos todos los del 5o gradoos
        juntamos todos los del 5o grado, para platicar que hicimos en
        vacaciones. Pronto se formó una rueda con Pronto se formó una rueda con
        Pronto se formó
      </Header>
      <section className="gallery">
        <div className="container gallery-container">
          <div className="gallery__section-image">
            <img src={horse} alt="nat caballo" />
          </div>
          <div className="gallery__section-content">
            <h1>Yo y los caballos</h1>
            <p>
              os juntamos todos los del 5o grado, para platicar que hicimos en
              vacaciones. Pronto se formó una rueda con Pronto se formó una
              rueda con Pronto se formó os juntamos todos los del 5o grado, para
              platicar que hicimos en vacaciones. Prontoos todos
              los del 5o grado, para platicar que hicimos en vacaciones. Pronto
              se formó una rueda con Pronto se formó una rueda con Pronto se
              fo
            </p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="container gallery-container">
          <div className="gallery__section-image">
            <img src={focusPainting} alt="nat caballo" />
          </div>
          <div className="gallery__section-content">
            <h1>Yo pintando...</h1>
            <p>
              os juntamos todos los del 5o grado, para platicar que hicimos en
              vacaciones. Pronto se formó una rueda con Pronto se formó una
              rueda con Pronto se formó os juntamos todos los del 5o grado, para
              platicar que hicimos en vacaciones. Pronto se formó una rueda con
              Pronto se formó una rueda con Pronto se formó os juntamos todos
              los del 5o grado, para platicar que hicimos en vacaciones. Pronto
              se formó una rueda con Pronto se formó una rueda con Pronto se
              fo
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
