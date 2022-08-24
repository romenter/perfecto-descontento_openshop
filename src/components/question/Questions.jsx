import SectionHead from "../../molecules/SectionHead";
import { FaQuestion } from "react-icons/fa";
import Question from "../../molecules/Question";
import { response } from "../../data";

import "./questions.css";

const Questions = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="Preguntas frecuentes" />
        <div className="faqs__wrapper">
          {response.map(({ id, preg, res }) => {
            return <Question key={id} question={preg} answer={res} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
