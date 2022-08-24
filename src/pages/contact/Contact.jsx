import React from "react";
import Header from "../../components/header/Header";
import portada from "../../assets/images/guy/nat-magic.jpeg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Estemos en contacto" image={portada}>
        os juntamos todos los del 5o gradoos juntamos todos los del 5o gradoos
        juntamos todos los del 5o grado, para platicar que hicimos en
        vacaciones. Pronto se formó una rueda con Pronto se formó una rueda con
        Pronto se formó
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mail-naturosso@gmail.com"
              target="_blank"
              rel="natalia rosso"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me.romen_terga/"
              target="_blank"
              rel="natalia rosso"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+541122888472"
              target="_blank"
              rel="natalia rosso"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
