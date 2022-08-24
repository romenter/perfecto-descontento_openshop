import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FrequenlyQuestions = ({ question, answer }) => {
  const [isAnswerShowwing, setIsAnswerShowwing] = useState(false);

  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShowwing((prev) => !prev)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShowwing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowwing && <p>{answer}</p>}
    </article>
  );
};

export default FrequenlyQuestions;
