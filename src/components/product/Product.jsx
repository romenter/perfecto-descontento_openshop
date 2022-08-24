import React from "react";
import SectionHead from "../../molecules/SectionHead";
import Card from "../../UI/Card";
import { AiFillCaretRight } from "react-icons/ai";

import "./product.css";

const products = require.context("../../assets/images/products/", true);

const Programs = ({ product }) => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={product[0].icon} title={product[0].type} />
      </div>
      <div className="programs__wrapper">
        {product.map(({ id, src, title, info, path }) => {
          return (
            <Card className="programs__program" key={id}>
              <img src={products(`./${src}.jpeg`)} alt={path} />
              <div className="programs__content">
                <h4>{title}</h4>
                <small>{info}</small>
                <a
                  href="https://wa.me/+541122888472"
                  target="_blank"
                  className="btn sm"
                >
                  Saber mas <AiFillCaretRight />
                </a>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
