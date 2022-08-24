import React from "react";
import SectionHead from "../../molecules/SectionHead";
import { GiChewedHeart } from "react-icons/gi";
import Image from "../../assets/images/guy/nat-magic.jpeg";
import { productCart } from "./../../productsData";
import { Link } from "react-router-dom";
import Card from "../../UI/Card";

import "./values.css";

const products = require.context("../../assets/images/products/", true);

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="imagen" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiChewedHeart />} title="Productos" />
          <p>
            Nos juntamos todos los del 5o grado, para platicar que hicimos en
            vacaciones. Pronto se formó una rueda con Pronto se formó una rueda
            con Pronto se formó
          </p>
          <div className="values__wrapper">
            {productCart.map(({ id, icon, title, desc, src, path }) => {
              return (
                <Card key={id} className="values__value">
                  <Link to={path}>
                    <span>{icon}</span>
                    <h3>{title}</h3>
                    <img
                      src={products(`./${src}.jpeg`)}
                      alt={path}
                      className="values-value value-img"
                    />
                    <p>{desc}</p>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
